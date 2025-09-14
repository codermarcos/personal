terraform {
	required_version = ">= 1.13.2"

	backend "s3" {
		bucket = "codermarcos-zone-state"
		key    = "terraform.tfstate"
		region = "us-east-1"
	}

	required_providers {
		aws = {
			source  = "hashicorp/aws"
			version = "~> 6.0"
		}
		null  = {}
		local = {}
	}
}
