import { TagCategory, TagCloud, TagCloudTool, TagCompany, TagTecnology, TagType } from './pt-tags';
import { Mixins } from '.';

const projects = (mixin: Mixins): Array<any> => [
	mixin.projectItem(
		'backend-vende-mais',
		'Um BFF para o App do vendedor que consumia a API do Salesforce.',
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
		'Um App usando React Native feito para os vendedores que atuavam vendendo seguros nas ruas.',
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
		'Aplicativo progressivo (PWA) usado pela cocierge nos laboratórios da empresa.',
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
		'Automação feita em cypress usando BDD com geração de relátórios automatizada.',
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
		'BFF (Backend for frontend) usado nos call centers da empresa verificando informações de exames, preços e convênios.',
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
		'Aplicação web usada por operadores da empresa que atuam no call center verificando informações de exames, preços e convênios.',
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
		'Implementação de um ArgoCD multicluster usando terraform com Helm.',
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
		'Atuação na integração do Datadog com o Jellyfish para métricas de Failure Rate e MTTR.',
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
		'Monorepo que contem boa parte dos frontends na empresa e ferramentas para auxiliar no desenvolvimento.',
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
		'Primeira atuação nas pipelines (Github actions) usadas por toda empresa.',
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
		'Um template tema escuro para ferramenta de criação de blog hexo.',
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
				TagCloudTool.s3,
			],
		},
	),
	mixin.projectItem(
		'personal',
		'Projeto desta pagina usando pug typescript css-in-js.',
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
				TagTecnology.svg,
				TagTecnology.pug,
				TagTecnology.css,
			],
			[TagType.nuvem]: [
				TagCloud.aws,
			],
			[TagType.servico]: [
				TagCloudTool.cloudfront,
				TagCloudTool.s3,
			],
		},
	),
	mixin.projectItem(
		'simple-mask-money',
		'Um template tema escuro para ferramenta de criação de blog hexo.',
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
		'Uma trilha de estudos para meus mentorados.',
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
		'Um parser de HTML que fiz para estudar rust.',
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
		'Uma pequena contribuição para a documentção sobre como usar o vue-js com http-server.',
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
		'Um projeto com React para usar como template de setup para outros projetos.',
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
		'Meu segundo projeto em rust implementando um editor de markdown usando uma api websockets.',
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
		'Meu primeiro projeto usando rust implementando alguns algoritimos de ordenação.',
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
		'micro-frontends',
		'Pequena pock sobre micro frontends.',
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
		'Um site adulto para streamming de video.',
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
		'Uma prova de conceito para testar o quanto eficiente seria usar GraphQL como BFF.',
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
		'Um pacote com o script para impletação de um jogo da velha.',
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
		'Uma api para jogar jogo da velha usando um pacote que criei, junto com webscokets.',
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
		'BFF (Backend for frontend) usado nos totens de auto atendimento dos laboratórios da empresa.',
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
		'Aplicativo progressivo (PWA) usado nos totens de auto atendimento nos laboratórios da empresa.',
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
		'Site que criei para controlar passageiros em um avião durante o salto, controle de equipamentos etc..',
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
		'Api para um site que criei para controlar passageiros em um avião durante o salto, controle de equipamentos etc..',
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
		'Api para um site para indexar videos adultos de todos os sites.',
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
		'Código de um altimetro que criei para coletar dados durante um salto de paraquedas.',
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
		'Aplicação para consumir API do pokemon',
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
		'Backend que armazenava o código que é retirado no toten quando o cliente vai até uma agência.',
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
		'Backend que armazenava o código que é retirado no toten quando o cliente vai até uma agência.',
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
		'Projeto do site do serasa consumidor onde o cliente consegue entrar e verificar seu score.',
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
		'Criador de hot sites feito muito similar com o wix.',
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
		'Design system da locaweb usado nos frontends da locaweb.',
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
		'Contribuição para documentação incluindo alguns detalhes para facilitar o entendimento.',
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
		'Aplicação que disponibilizava uma forma de mockar APIs baseado em contratos, gerando dados fakes ou randomicos.',
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
		'Um evento que acontece pelo mundo que tentei organizar aqui no brasil.',
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
		'Uma trilha de estudos que iniciei criado por mim mesmo.',
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
		'Backend para Fake-Api aplicação que disponibilizava uma forma de mockar APIs baseado em contratos.',
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
		'Extensão para o vscode que seria como um gerenciador extensões necessarias para determinado projeto.',
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
		'hexo',
		'Contribuição para o site do Hexo.JS incluindo meu template otimizado para SEO.',
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
		'Um template tema escuro para ferramenta de criação de blog hexo.',
		'',
		2017,
		12,
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
		'CLOUDClass',
		'Um sistema verificava o status de sincronização do dados do ERP com o servidor de Backup.',
		'',
		2017,
		2,
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
		'PDV ',
		'Um aplicação web que atuava como ponto de vendas do sistema ERPClass.',
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
			],
		},
	),
	mixin.projectItem(
		'PDVApi',
		'Uma Api para uma aplicação web que atuava como ponto de vendas do sistema ERPClass.',
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
		'Backend para o MeAppisa App para notificar quando seus projetos precisem atualizar as dependencias.',
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
		'Aplicativo para notificar quando um projeto precisa-se atualizar as dependencias.',
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
		'ERPStatus Frontend',
		'Aplicação web que exibia o status de sincronização dos dados do ERP com o servidor de Backup.',
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
			],
		},
	),
	mixin.projectItem(
		'ERPStatus Api',
		'Api que salvava o status de sincronização do dados do ERP com o servidor de Backup.',
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
		'Um client que monitorava na maquina o status de sincronização do dados do ERP com o servidor de Backup.',
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
		'Um sistema ERP controlava estoque e emitia nota.',
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
		'Uma aplicação para controlar entrada na academia.',
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
		'Uma implementação de uma criptorafia assimetrica que criei.',
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
		'Meu primeiro grande projeto foi um TCC para facilitar uma viagem.',
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
