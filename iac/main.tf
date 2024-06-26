variable "package_path" {
	description = "Path to your packege json"
	type        = string
	default     = "../package.json"
}

variable "root_domain" {
  description = "Site domain"
  type        = string
	default     = "codermarcos.zone"
}

variable "sub_domain" {
  description = "Site sub domain"
  type        = string
	default     = "mr.codermarcos.zone"
}

locals {
  mime_type_mappings = {
    json = "application/json",
    js   = "text/javascript",
    xml  = "application/xml",
    ico  = "image/x-icon",
    txt  = "text/plain",
    html = "text/html",
    webp = "image/webp",
    jpg  = "image/jpeg",
    gif  = "image/gif",
    png  = "image/png",
    css  = "text/css",
  }

  package = jsondecode(file(var.package_path))

	name     = local.package.name
	dist_dir = pathexpand(join("", [".", local.package.bundle]))
}

data "aws_acm_certificate" "issued" {
  domain   = "codermarcos.zone"
  statuses = ["ISSUED"]
}

data "aws_cloudfront_cache_policy" "cache_default" {
  name = "Managed-CachingOptimized"
}

# TODO: Use it when move it to a shared repository
# data "aws_cloudfront_function" "redirects" {
# 	name = "redirects-to-index"
# 	stage = "LIVE"
# }

resource "aws_cloudfront_function" "redirects" {
  name    = "redirects-to-index"
  runtime = "cloudfront-js-2.0"
  comment = "Redirect to index when omit index html"
  publish = true
  code    = file("${path.module}/functions.js")
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.frontend_bucket.bucket_domain_name

    origin_id   = local.name
  }

  aliases = [
    var.root_domain,
    var.sub_domain,
  ]

  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  comment             = "Frontend app"
  default_root_object = "index.html"

  default_cache_behavior {
    cache_policy_id = data.aws_cloudfront_cache_policy.cache_default.id

    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.name
    compress         = true

    default_ttl = 86400 * 15
    max_ttl     = 31536000
    min_ttl     = 1

    viewer_protocol_policy = "redirect-to-https"

		function_association {
			event_type = "viewer-request"
			function_arn = aws_cloudfront_function.redirects.arn
		}
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }


  viewer_certificate {
    acm_certificate_arn            = data.aws_acm_certificate.issued.arn
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
    cloudfront_default_certificate = false
  }
}

resource "aws_s3_bucket" "frontend_bucket" {
  force_destroy = true
  bucket        = local.name
}

resource "aws_s3_bucket_acl" "frontend_bucket_acl" {
	bucket = local.name
	acl    = "public-read"
  depends_on = [aws_s3_bucket_ownership_controls.frontend_bucket_controls]
}

resource "aws_s3_bucket_policy" "frontend_bucket_policy" {
	bucket = local.name
	policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = ["s3:GetObject"]
        Effect    = "Allow"
        Resource  = "${aws_s3_bucket.frontend_bucket.arn}/*"
        Principal = "*"
      },
    ]
  })
}

resource "aws_s3_bucket_ownership_controls" "frontend_bucket_controls" {
	bucket = local.name

	rule {
    object_ownership = "BucketOwnerPreferred"
  }

  depends_on = [aws_s3_bucket_public_access_block.frontend_bucket_access_block]
}

resource "aws_s3_bucket_public_access_block" "frontend_bucket_access_block" {
	bucket = local.name

	ignore_public_acls      = false
	block_public_acls       = false
	block_public_policy     = false
	restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.frontend_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_object" "frontend_object" {
  for_each = fileset(local.dist_dir, "**")
  key      = each.value
  source   = "${local.dist_dir}/${each.value}"
  bucket   = aws_s3_bucket.frontend_bucket.bucket

  force_destroy = true
  etag          = filemd5("${local.dist_dir}/${each.value}")
  content_type  = local.mime_type_mappings[concat(regexall("\\.([^\\.]*)$", each.value), [[""]])[0][0]]
}

output "static_files_folder" {
  value = local.dist_dir
}

output "cloudfront_endpoint" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "website_domain" {
  value = aws_s3_bucket_website_configuration.website.website_domain
}

output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}
