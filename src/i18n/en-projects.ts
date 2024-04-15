import { TagCategory, TagCloud, TagCloudTool, TagCompany, TagTecnology, TagType } from './en-tags';
import { Mixins } from '.';

const projects = (mixin: Mixins): Array<any> => [
	mixin.projectItem(
		'gulpjs/interpret',
		'A little contribution for a package that is used by webpack it is to make webpack suport the new version of SWC.',
		'',
		2024,
		4,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript
			],
		},
	),
	mixin.projectItem(
		'node-pg-migrate',
		'A little contribuition for a node package that is used to make database migrations.',
		'',
		2024,
		4,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript
			],
		},
	),
	mixin.projectItem(
		'git-ai',
		'A package that generates commit messages and pull requests based on their diff and related tasks.',
		'',
		2024,
		3,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.rust
			],
		},
	),
	mixin.projectItem(
		'rust-key-logger',
		'A project to study more about the low levels api of each OS.',
		'',
		2024,
		2,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.rust
			],
		},
	),
	mixin.projectItem(
		'arena-commerce-ai',
		'A chat that uses the open AI to anwser questions about products in that page.',
		'',
		2023,
		12,
		{
			[TagType.empresa]: [
				TagCompany.arena,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.websockets,
				TagTecnology.vite,
				TagTecnology.preact,
			],
		},
	),
	mixin.projectItem(
		'arena-dashboard',
		'Migration of a dashboard which is used to create blogs and chats from a old version of React to Next.JS',
		'',
		2023,
		3,
		{
			[TagType.empresa]: [
				TagCompany.arena,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.react,
				TagTecnology.redux,
				TagTecnology.next,
				TagTecnology.react_query,
				TagTecnology.css,
				TagTecnology.jest,
			],
		},
	),
	mixin.projectItem(
		'model-book-backend',
		'Serveless backend application low cost to store photos of models with photo upload from client-side.',
		'',
		2023,
		6,
		{
			[TagType.categoria]: [
				TagCategory.freela,
			],
			[TagType.nuvem]: [
				TagCloud.aws
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.cdk,
  			TagTecnology.lambda,
  			TagTecnology.api_gateway,
  			TagTecnology.cloudfront,
  			TagTecnology.cognito,
  			TagTecnology.sqs,
  			TagTecnology.sns,
  			TagTecnology.s3,
			],
		},
	),
	mixin.projectItem(
		'backend-vende-mais',
		'A BFF (Backend for Frontend) for the seller\'s app that consumed the Salesforce API.',
		'',
		2021,
		8,
		{
			[TagType.empresa]: [
				TagCompany.groove,
				TagCompany.stone,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.docker,
				TagTecnology.k8s,
				TagTecnology.nest,
				TagTecnology.jest,
			],
		},
	),
	mixin.projectItem(
		'aplicativo-vende-mais',
		'An app built using React Native for the salespeople who sold insurance on the streets.',
		'',
		2021,
		8,
		{
			[TagType.empresa]: [
				TagCompany.groove,
				TagCompany.stone,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.react,
				TagTecnology.mobx,
				TagTecnology.jest,
			],
		},
	),
	mixin.projectItem(
		'frozen',
		'A Progressive Web Application (PWA) used by the concierge in the company\'s laboratories.',
		'',
		2020,
		2,
		{
			[TagType.empresa]: [
				TagCompany.dasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.docker,
				TagTecnology.react,
				TagTecnology.redux,
				TagTecnology.jest,
				TagTecnology.k8s,
			],
		},
	),
	mixin.projectItem(
		'automation-ui-orelhao',
		'Automation implemented in Cypress using BDD (Behavior-Driven Development) with automated report generation.',
		'',
		2020,
		5,
		{
			[TagType.empresa]: [
				TagCompany.dasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.cypress,
			],
		},
	),
	mixin.projectItem(
		'band-aid',
		'A BFF (Backend for Frontend) used in the company\'s call centers to verify information about exams, prices, and insurance providers.',
		'',
		2020,
		5,
		{
			[TagType.empresa]: [
				TagCompany.dasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.k8s,
				TagTecnology.typescript,
				TagTecnology.cypress,
				TagTecnology.vue,
				TagTecnology.vuex,
				TagTecnology.express,
				TagTecnology.jest,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
		},
	),
	mixin.projectItem(
		'orelhao',
		'A web application used by operators in the company\'s call center to verify information about exams, prices, and insurance providers.',
		'',
		2020,
		5,
		{
			[TagType.empresa]: [
				TagCompany.dasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.docker,
				TagTecnology.k8s,
				TagTecnology.typescript,
				TagTecnology.cypress,
				TagTecnology.vue,
				TagTecnology.vuex,
				TagTecnology.jest,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
		},
	),
	mixin.projectItem(
		'argocd-infracommerce',
		'Implementation of a multi-cluster ArgoCD using Terraform with Helm.',
		'',
		2022,
		2,
		{
			[TagType.empresa]: [
				TagCompany.groove,
				TagCompany.infracommerce,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.terraform,
				TagTecnology.k8s,
				TagTecnology.argocd,
			],
			[TagType.nuvem]: [
				TagCloud.azure,
			],
		},
	),
	mixin.projectItem(
		'jellyfish-webhook',
		'Involvement in the integration of Datadog with Jellyfish for Failure Rate and MTTR metrics.',
		'',
		2022,
		9,
		{
			[TagType.empresa]: [
				TagCompany.loft,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.pulumi,
				TagTecnology.typescript,
				TagTecnology.datadog,
				TagTecnology.jest,
				TagTecnology.jellyfish,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
		},
	),
	mixin.projectItem(
		'empire',
		'A monorepo that contains a significant portion of the company\'s front-end applications and tools to assist in development.',
		'',
		2022,
		4,
		{
			[TagType.empresa]: [
				TagCompany.loft,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.next,
				TagTecnology.jest,
				TagTecnology.docker,
				TagTecnology.cypress,
				TagTecnology.k8s,
				TagTecnology.css,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
			[TagType.servico]: [
				TagCloudTool.cloudfront,
				TagCloudTool.lambda,
				TagCloudTool.iam,
				TagCloudTool.s3,
			],
		},
	),
	mixin.projectItem(
		'actions',
		'Implementation of reusable workflows in GitHub Actions to be used across the entire company.',
		'',
		2022,
		8,
		{
			[TagType.empresa]: [
				TagCompany.loft,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
			[TagType.servico]: [
				TagCloudTool.lambda,
				TagCloudTool.iam,
			],
		},
	),
	mixin.projectItem(
		'upper-site',
		'A conceptual website that I created for a company I co-founded with my partner.',
		'',
		2021,
		7,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.svg,
				TagTecnology.pug,
				TagTecnology.css,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
			[TagType.servico]: [
				TagCloudTool.cloudfront,
				TagCloudTool.acm,
				TagCloudTool.s3,
			],
		},
	),
	mixin.projectItem(
		'personal',
		'Project for this page using Pug, TypeScript, CSS-in-JS.',
		'',
		2021,
		7,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.terraform,
				TagTecnology.webpack,
				TagTecnology.svg,
				TagTecnology.pug,
				TagTecnology.css,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
			[TagType.servico]: [
				TagCloudTool.cloudfront,
				TagCloudTool.acm,
				TagCloudTool.s3,
			],
		},
	),
	mixin.projectItem(
		'simple-mask-money',
		'A npm package I created for input masking of currency type',
		'',
		2017,
		9,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.rust,
				TagTecnology.html,
			],
		},
	),
	mixin.projectItem(
		'jornada-engenheiro-de-software',
		'A study roadmap for my mentees.',
		'',
		2021,
		10,
		{
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript,
				TagTecnology.node,
				TagTecnology.html,
				TagTecnology.css,
			],
		},
	),
	mixin.projectItem(
		'rust-simple-parser',
		'A HTML parser that I developed to study Rust.',
		'',
		2020,
		10,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.rust,
				TagTecnology.html,
			],
		},
	),
	mixin.projectItem(
		'vue-cli',
		'A small contribution to the documentation on how to use Vue.js with http-server.',
		'',
		2020,
		10,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.vue,
			],
		},
	),
	mixin.projectItem(
		'react-typescript',
		'A React project to be used as a setup template for other projects.',
		'',
		2020,
		9,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.react,
				TagTecnology.redux,
				TagTecnology.redux_sagas,
			],
		},
	),
	mixin.projectItem(
		'rust-live-md',
		'My second project in Rust, implementing a Markdown editor using a WebSocket API.',
		'',
		2020,
		7,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.docker,
				TagTecnology.rust,
				TagTecnology.html,
				TagTecnology.css,
			],
		},
	),
	mixin.projectItem(
		'rust-sorting-algorithms',
		'My first project using Rust, implementing various sorting algorithms.',
		'',
		2020,
		7,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.rust,
			],
		},
	),
	mixin.projectItem(
		'stratus-spa',
		'The frontend of an application that aimed to find cost-saving opportunities in the cloud.',
		'',
		2020,
		2,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.react,
				TagTecnology.grpc,
				TagTecnology.protobuf,
				TagTecnology.redux,
				TagTecnology.redux_sagas,
			],
			[TagType.nuvem]: [
				TagCloud.gcp,
			],
			[TagType.servico]: [
				TagCloudTool.cloudstorage,
				TagCloudTool.cloudcdn,
			],
		},
	),
	mixin.projectItem(
		'micro-frontends',
		'A short pocket guide on micro frontends.',
		'',
		2020,
		1,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.graphql,
			],
		},
	),
	mixin.projectItem(
		'sexy-boy',
		'An adult website for video streaming.',
		'',
		2019,
		10,
		{
			[TagType.categoria]: [
				TagCategory.freela,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.graphql,
			],
		},
	),
	mixin.projectItem(
		'pock-graphql-middleware',
		'A proof of concept to test the efficiency of using GraphQL as a Backend for Frontend (BFF) approach.',
		'',
		2019,
		5,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.graphql,
			],
		},
	),
	mixin.projectItem(
		'jogo-da-velha-js',
		'A package containing the script for implementing a Tic-Tac-Toe game.',
		'',
		2019,
		4,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
			],
		},
	),
	mixin.projectItem(
		'jogo-da-velha-api',
		'An API for playing Tic-Tac-Toe using a package I created, along with WebSockets.',
		'',
		2019,
		4,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.typescript,
				TagTecnology.websockets,
			],
		},
	),
	mixin.projectItem(
		'bifrost',
		'A BFF (Backend for Frontend) used in the self-service kiosks of the company\'s laboratories',
		'',
		2019,
		3,
		{
			[TagType.empresa]: [
				TagCompany.dasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.typescript,
				TagTecnology.graphql,
				TagTecnology.apollo,
				TagTecnology.mocha,
				TagTecnology.chai,
				TagTecnology.k8s,
				TagTecnology.docker,
				TagTecnology.websockets,
			],
		},
	),
	mixin.projectItem(
		'apollo-11',
		'A Progressive Web Application (PWA) used on self-service kiosks in the company\'s laboratories.',
		'',
		2019,
		2,
		{
			[TagType.empresa]: [
				TagCompany.dasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.typescript,
				TagTecnology.graphql,
				TagTecnology.k8s,
				TagTecnology.docker,
				TagTecnology.websockets,
			],
		},
	),
	mixin.projectItem(
		'manifest-app-web',
		'API for a website that I created to manage passengers during a skydiving jump, equipment control, and more.',
		'',
		2019,
		2,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
			],
		},
	),
	mixin.projectItem(
		'manifest-app-api',
		'API for a website that I created to manage passengers during a skydiving jump, equipment control, and more.',
		'',
		2019,
		2,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
			],
		},
	),
	mixin.projectItem(
		'menu-porn-crawler-api',
		'API for a website to index adult videos from all websites.',
		'',
		2019,
		1,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
			],
		},
	),
	mixin.projectItem(
		'altimetro-br',
		'The code for an altimeter that I created to collect data during a parachute jump.',
		'',
		2018,
		12,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.c_pp,
			],
		},
	),
	mixin.projectItem(
		'pokeapp',
		'An application to consume the Pokemon API',
		'',
		2018,
		9,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.angular,
			],
		},
	),
	mixin.projectItem(
		'queue-code',
		'A backend that stores the code retrieved from the kiosk when the customer visits a branch.',
		'',
		2018,
		11,
		{
			[TagType.empresa]: [
				TagCompany.everis,
				TagCompany.santander,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.node,
				TagTecnology.express,
				TagTecnology.jest,
				TagTecnology.jenkins,
			],
		},
	),
	mixin.projectItem(
		'queue-code',
		'A backend that stores the code obtained from a totem when a customer visits a branch.',
		'',
		2018,
		11,
		{
			[TagType.empresa]: [
				TagCompany.everis,
				TagCompany.santander,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.node,
				TagTecnology.express,
				TagTecnology.jest,
				TagTecnology.jenkins,
			],
		},
	),
	mixin.projectItem(
		'serasa-consumidor',
		'The project for the Serasa Consumidor website where customers can log in and check their credit score.',
		'',
		2018,
		5,
		{
			[TagType.empresa]: [
				TagCompany.capitani,
				TagCompany.serasa,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.angular,
				TagTecnology.protractor,
				TagTecnology.jasmine,
				TagTecnology.karma,
				TagTecnology.sass,
				TagTecnology.jenkins,
				TagTecnology.docker,
				TagTecnology.k8s,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
			[TagType.servico]: [
				TagCloudTool.cloudfront,
			],
		},
	),
	mixin.projectItem(
		'lwsite',
		'A creator of sites built with a design and functionality similar to Wix.',
		'',
		2017,
		10,
		{
			[TagType.empresa]: [
				TagCompany.locaweb,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.vue,
				TagTecnology.vuex,
				TagTecnology.jest,
				TagTecnology.css,
				TagTecnology.sass,
			],
		},
	),
	mixin.projectItem(
		'locastyle',
		'Locaweb\'s design system used in Locaweb\'s front-end applications.',
		'',
		2017,
		11,
		{
			[TagType.empresa]: [
				TagCompany.locaweb,
			],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript,
				TagTecnology.css,
			],
		},
	),
	mixin.projectItem(
		'angular-cli',
		'"Contribution to the documentation, including additional details to enhance understanding.".',
		'',
		2018,
		9,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.angular,
			],
		},
	),
	mixin.projectItem(
		'fake-api-web',
		'An application that provided a way to mock APIs based on contracts, generating fake or random data.',
		'',
		2018,
		6,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript,
			],
		},
	),
	mixin.projectItem(
		'beer-js-sp',
		'An event that takes place worldwide that I attempted to organize in Brazil.',
		'',
		2018,
		5,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript,
			],
		},
	),
	mixin.projectItem(
		'notes',
		'A self-created study track that I initiated.',
		'',
		2018,
		5,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.javascript,
			],
		},
	),
	mixin.projectItem(
		'fake-api',
		'A backend for Fake-Api, an application that provided a way to mock APIs based on contracts.',
		'',
		2018,
		4,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.node,
			],
		},
	),
	mixin.projectItem(
		'sync-project-extensions',
		'An extension for VS Code that acts as a manager for the required extensions for a specific project.',
		'',
		2018,
		1,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.node,
			],
		},
	),
	mixin.projectItem(
		'hexo',
		'Contribution to the Hexo.JS website, including my SEO-optimized template.',
		'',
		2018,
		1,
		{
			[TagType.categoria]: [
				TagCategory.comunidade,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.html,
				TagTecnology.css,
			],
		},
	),
	mixin.projectItem(
		'dev-dark-theme',
		'A dark-themed template for the Hexo blog creation tool.',
		'',
		2017,
		12,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.html,
			],
		},
	),
	mixin.projectItem(
		'PDV',
		'A web application that was used as a point of sale for the ERPClass system.',
		'',
		2017,
		10,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.angular,
				TagTecnology.protractor,
				TagTecnology.jasmine,
				TagTecnology.karma,
				TagTecnology.sass,
			],
		},
	),
	mixin.projectItem(
		'PDVApi',
		'An API for a web application that was used as a point of sale for the ERPClass system.',
		'',
		2017,
		8,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.c_sharp,
				TagTecnology.firebird,
				TagTecnology.entity,
			],
		},
	),
	mixin.projectItem(
		'meappisa-api',
		'A backend for the MeAppisa app to notify when your projects need to update their dependencies.',
		'',
		2017,
		8,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
			],
		},
	),
	mixin.projectItem(
		'meappisa-app',
		'An application to notify when a project needs to update its dependencies.',
		'',
		2017,
		7,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.typescript,
				TagTecnology.ionic,
				TagTecnology.html,
				TagTecnology.css,
			],
		},
	),
	mixin.projectItem(
		'dispute-click-frontend',
		'A web application frontend for discount coupon competitions.',
		'',
		2017,
		8,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.angular,
				TagTecnology.sass,
			],
		},
	),
	mixin.projectItem(
		'dispute-click-backend',
		'A web application backend for discount coupon competitions.',
		'',
		2017,
		4,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.node,
				TagTecnology.loopback,
				TagTecnology.postgress,
			],
		},
	),
	mixin.projectItem(
		'ERPStatus Frontend',
		'A web application that displayed the synchronization status of the data between the ERP and the servers, as well as the backup lifecycle.',
		'',
		2017,
		4,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.angularjs,
				TagTecnology.sass,
				TagTecnology.grunt,
			],
		},
	),
	mixin.projectItem(
		'ERPStatus Api',
		'An API that stored the synchronization status of the data between the ERP and the servers, as well as the backup lifecycle.',
		'',
		2017,
		4,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.c_sharp,
			],
		},
	),
	mixin.projectItem(
		'ERPStatus Client',
		'A client monitored on the machine the synchronization status of the data between the ERP and the servers, as well as the backup lifecycle.',
		'',
		2017,
		4,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.delphi,
			],
		},
	),
	mixin.projectItem(
		'ERPClass',
		'A ERP system managed inventory and issued invoices.',
		'',
		2017,
		2,
		{
			[TagType.empresa]: [TagCompany.softclass],
			[TagType.categoria]: [
				TagCategory.trabalho,
			],
			[TagType.tecnologia]: [
				TagTecnology.firebird,
				TagTecnology.delphi,
			],
		},
	),
	mixin.projectItem(
		'gym-door',
		'An application that I created as a freelancer to control access to a gym in my neighborhood. It printed a card on a specific printer and released the turnstile or not, via barcode on the printed card.',
		'',
		2016,
		10,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.c_sharp,
				TagTecnology.mysql,
			],
		},
	),
	mixin.projectItem(
		'encryptor',
		'Code of an asymmetric cryptography that I created for university.',
		'',
		2016,
		10,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.c_sharp,
			],
		}
	),
	mixin.projectItem(
		'easy travel',
		'My first major project was my college final project, in which I developed an application to plan a trip.',
		'',
		2015,
		10,
		{
			[TagType.categoria]: [
				TagCategory.estudo,
			],
			[TagType.tecnologia]: [
				TagTecnology.c_sharp,
				TagTecnology.mysql,
			],
		}
	),
].sort((a, b) => {
	const dateA = new Date(0);
	dateA.setFullYear(a.date.year);
	dateA.setMonth(a.date.month);

	const dateB = new Date(0);
	dateB.setFullYear(b.date.year);
	dateB.setMonth(b.date.month);

	if (dateA.getTime() < dateB.getTime())
		return 1;
	if (dateA.getTime() > dateB.getTime())
		return -1;

	return 0;
});

export default projects;
