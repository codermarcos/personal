# 💡 Personal

This is my **personal website**.

**This project** uses typescript, pug and webpack to bundle a static page and deploying to AWS S3.

> **Table of contents**
>
> - [🔍 Requirements](#-requirements)
> - [🔨 Project setup](#-project-setup)
> - [📑 Available Scripts](#️-available-scripts)
>   - [Server for development](#️server-for-development)
>   - [Build](#️build)
> - [⬆️ Deploy environment locally](#-deploy-environment-locally)
> - [🔥 Destroy environment locally](#-destroy-environment-locally)
> - [📚 Learn more](#learn-more)
> - [💪 Dev Team](#-dev-team)

## 🔍 Requirements

| Dependencies                                 | Description               |
| -------------------------------------------- | ------------------------- |
| [![node-version]][node-download]             | Javascript Runtime        |
| [![terraform-version]][terraform-download]   | Terraform                 |
| [![terragrunt-version]][terragrunt-download] | Wrapper for Terraform     |

## 🔨 Project setup

1. To **clone repository** you need to have [git](https://git-scm.com/downloads) installed:

```bash
git clone
```

2. Enter repository

```bash
cd personal
```

3. To **install dependencies** you need to have [NodeJS](https://nodejs.org/en/) installed:

```bash
npm install
```

## 📝 Available scripts

In the project directory, you can run:

### Server for development

Runs the app in the development mode this server compiles and hot-reloads with linter locally:

```bash
npm start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

> You can use on mobile if uses the same network to this replace `localhost` by your ip.

### Build

Builds the app for production to the `dist` folder.

```bash
npm run build
```

## ⬆ Deploy environment locally

To deploy locally you need run [build](#️build) before proceed.

1. To create the s3 bucket use this, you need terragrunt [terragrunt][terragrunt-download] installed:

```bash
terragrunt apply --terragrunt-working-dir iac --terragrunt-source . -target="aws_acm_certificate.issued"
```

> To learn more [Terragrunt](https://terragrunt.gruntwork.io/docs/).

## 🔥 Destroy environment locally

1. Now destroy s3 bucket with terraform

```bash
terragrunt destroy --terragrunt-working-dir iac --terragrunt-source .
```

## Learn More

- [Pug.js](https://pugjs.org/api/getting-started.html)
- [Terraform](https://learn.hashicorp.com/terraform?utm_source=terraform_io&utm_content=terraform_io_hero)
- [AWS](https://docs.aws.amazon.com/s3/?id=docs_gateway)

## 💪 Dev Team

This project exists thanks to all these people.

[![Marcos](https://avatars3.githubusercontent.com/u/12430365?s=100)](https://github.com/codermarcos)

[terraform-download]: https://learn.hashicorp.com/tutorials/terraform/install-cli
[terragrunt-download]: https://terragrunt.gruntwork.io/docs/getting-started/install/
[node-download]: https://nodejs.org/download/release/v14.14.0/
[terraform-version]: https://img.shields.io/badge/terraform-latest-blue
[terragrunt-version]: https://img.shields.io/badge/terragrunt-latest-blue
[node-version]: https://img.shields.io/badge/node-latest-blue
