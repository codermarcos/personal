variable "project" {
  description = "Name of the project"
  type        = string
}

variable "root_domain" {
  description = "Site domain"
  type        = string
}

variable "sub_domain" {
  description = "Site sub domain"
  type        = string
}

variable "dist_dir" {
  description = "Dist folder to deploy"
  type        = string
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
    css  = "text/css"
  }
}

data "aws_acm_certificate" "issued" {
  domain   = "codermarcos.zone"
  statuses = ["ISSUED"]
}

data "aws_cloudfront_cache_policy" "cache" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.frontend_bucket.bucket_domain_name
    origin_id   = var.project
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
    cache_policy_id  = data.aws_cloudfront_cache_policy.cache.id

    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = var.project
    compress         = true

    max_ttl     = 31536000
    default_ttl = 86400
    min_ttl     = 1

    viewer_protocol_policy = "redirect-to-https"
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
  acl           = "public-read"
  force_destroy = true
  bucket        = var.project

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.project}/*",
      "Principal": "*"
    }
  ]
}
EOF
}

resource "aws_s3_bucket_object" "frontend_object" {
  for_each = fileset(var.dist_dir, "**")
  key      = each.value
  source   = "${var.dist_dir}/${each.value}"
  bucket   = aws_s3_bucket.frontend_bucket.bucket

  force_destroy = true
  etag          = filemd5("${var.dist_dir}/${each.value}")
  content_type  = local.mime_type_mappings[concat(regexall("\\.([^\\.]*)$", each.value), [[""]])[0][0]]
}

output "static_files_folder" {
  value = var.dist_dir
}

output "cloudfront_endpoint" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "website_domain" {
  value = aws_s3_bucket.frontend_bucket.website_domain
}

output "website_endpoint" {
  value = aws_s3_bucket.frontend_bucket.website_endpoint
}
