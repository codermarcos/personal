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

## ⬆ Deploy it manually

To deploy manually you need run [build](#️build) before proceed.

1. Declare the necessary environment variables:

```dotenv
AWS_SECRET_ACCESS_KEY="asecretkey"
AWS_ACCESS_KEY_ID="anaccesskey"
AWS_REGION="us-east-1"
```

To Unix:

```bash
export AWS_SECRET_ACCESS_KEY="<YOU CAN GET SECRET ACCESS KEY FOLLOWING THE LINK BELLOW>"
export AWS_ACCESS_KEY_ID="<YOU CAN GET ACCESS KEY FOLLOWING THE LINK BELLOW>"
export AWS_REGION="<WHERE YOU WILL DEPLOY IT>"
```

To windows:

```bash
$Env:AWS_SECRET_ACCESS_KEY="<YOU CAN GET SECRET ACCESS KEY FOLLOWING THE LINK BELLOW>"
$Env:AWS_ACCESS_KEY_ID="<YOU CAN GET ACCESS KEY FOLLOWING THE LINK BELLOW>"
$Env:AWS_REGION="<WHERE YOU WILL DEPLOY IT>"
```

> To get figma token read [this documentaion](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user_manage_add-key.html)

2. Install necessary dependencies, you need [terraform][terraform-download] installed:

```bash
terraform -chdir=iac get
```

3. Initialize the terraform:

```bash
terraform -chdir=iac init
```

4. Check the current state _(optional)_:

```bash
terraform -chdir=iac state pull
```

5. Create the insfrastructure and upload all assets:

```bash
terraform -chdir=iac apply
```

> To learn more [Terrafom](https://learn.hashicorp.com/terraform).

## 🔥 Destroy environment locally

1. Destroy the whole infrastructure with terraform

```bash
terraform -chdir=iac destroy
```

## Learn More

- [Pug.js](https://pugjs.org/api/getting-started.html)
- [Terraform](https://learn.hashicorp.com/terraform)
- [AWS](https://docs.aws.amazon.com/s3/?id=docs_gateway)

## 💪 Dev Team

This project exists thanks to all these people.

[![Marcos](https://avatars3.githubusercontent.com/u/12430365?s=100)](https://github.com/codermarcos)

[terraform-download]: https://learn.hashicorp.com/tutorials/terraform/install-cli
[node-download]: https://nodejs.org/download/release/v14.14.0/
[terraform-version]: https://img.shields.io/badge/terraform-latest-blue
[node-version]: https://img.shields.io/badge/node-latest-blue
