import { Informations, Mixins } from '.';
import projects from './pt-projects';


export const pt = (inf: Informations, mixin: Mixins): any => {
	const description = 'Marcos Gonçalves ou codermarcos é um engenheiro software que ama desafios e resolver problemas, aqui tem pouco de sua carreira.';
	const monthsOfYear = [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	];

	const durations = {
		days: 'dias',
		years: 'anos',
		months: 'meses',
	}

	const	contacts_raw = {
		email: 'coder.marcos@gmail.com',
		phone: '55 11 9 7135-3293',
	};

	const address = {
		url: 'https://goo.gl/maps/ywxZKJTAh6d33wSY8',
		cep: '09406330',
		street: 'Rua Iraja',
		city: 'Ribeirão pires',
		state: 'SP',
	};

	return {
		meta: {
			...inf.meta,
			'description': {
				name: 'description',
				content: description,
			},
			'og:title': {
				property: 'og:title',
				content: 'codermarcos - Experiências de Marcos Gonçalves De Carvalho'
			},
			'og:locale': {
				property: 'og:locale',
				content: 'pt_BR'
			},
			'og:description': {
				property: 'og:description',
				content: description,
			},
			keywords: {
				name: 'keywords',
				content: 'codermarcos, Marcos Gonçalves De Carvalho, Frontend, Backend, Devops, Programador, Desenvolvedor, Engenheiro'
			},
		},
		args: {
			...inf.args,
			...durations,
			title: 'codermarcos - Experiências de Marcos Gonçalves De Carvalho',
			job: 'Engenheiro de software',
			contacts_raw,
			address,
			language: 'pt-BR',
			from: 'De',
			to: 'Até',
			seeRecent: 'ver recentes',
			seePrevious: 'ver anteriores',
			articlesAndPosts: 'Artigos e postagens',
			projects: 'Projetos',
			academic: 'Formação academica',
			experiences: 'Experiências profissionais',
			photoAlt: 'Foto de Marcos Gonçalves (codermarcos)',
			aboutMe: 'Sou um <strong>engenheiro de software</strong> apaixonado por tecnologia, sempre em busca de novos conhecimentos e desafios. \
			Com ampla experiência em desenvolvimento de software, aprender e compartilhar conhecimentos. Minhas maiores motivações são: \
			🔀 Troca de experiências valorizo a colaboração e o compartilhamento de conhecimentos com colegas e profissionais da área. \
			❤️ Paixão pela tecnologia motivado pela inovação e pelo impacto positivo que a tecnologia pode trazer às pessoas e às organizações. \
			🔗 Conexões profissionais busco criar relações duradouras e significativas que transcendam o ambiente de trabalho. \
			Minhas principais áreas de interesse e competências são <strong>Cloud Computing</strong>: Especializado em <strong>AWS</strong>, com experiência em ferramentas de <strong>Infrastructure as Code (IaC)</strong> como <strong>Terraform, Pulumi, AWS CloudFormation</strong> e <strong>AWS CDK</strong>. \
			<strong>Backend Development</strong>: Profundo conhecimento em <strong>Node.js</strong>, com experiência em <strong>Python</strong> e uma forte paixão por <strong>Rust</strong>. \
			<strong>Frontend Development</strong>: Experiência com frameworks e bibliotecas como <strong>React, Preact, Angular, AngularJS</strong> e <strong>Vue</strong>. \
			Estou sempre em busca de oportunidades para aprender, crescer e contribuir para projetos inovadores e equipes dinâmicas.',
			contacts: {
				...mixin.contact(
					'linkedin',
					`linkedin.com/in/${inf.args.nick}`,
					`https://www.linkedin.com/in/${inf.args.nick}`,
					'h-adr',
				),
				...mixin.contact(
					'github',
					`github.com/${inf.args.nick}`,
					`https://github.com/${inf.args.nick}`,
					'h-adr',
				),
				...mixin.contact(
					'gmail',
					contacts_raw.email,
					`mailto:${contacts_raw.email}`,
					'h-adr',
				),
				...mixin.contact(
					'whatsapp',
					contacts_raw.phone,
					`https://api.whatsapp.com/send?phone=${contacts_raw.phone.replace(/[^0-9]+/g, '')}`,
					'h-adr',
				),
				...mixin.contact(
					'maps',
					`${address.city} - ${address.state}`,
					address.url,
					'h-adr',
				),
			},
			skillZone: 'Áreas de conhecimento',
			skillZoneDescription: 'Minhas zonas de conhecimento divididas em um gráfico de pizza 4/8 para Frontend, 1/8 para Devops e 3/8 para Backend',
			currently: 'Atualmente',
			monthsOfYear,
			articlesAndPostsList: [
				{
					image: ['/images/articles/dev-to-2024-3-what-is-a-good-message-and-size-for-a-commit', 'jpg', 'image/jpg'],
					link: 'https://dev.to/codermarcos/what-is-a-good-message-and-size-for-a-commit-2edd',
					title: 'What is a good message and size for a commit?',
					platform: 'Dev.to',
					date: {
						year: 2024,
						month: 3,
					},
				},
				{
					image: ['/images/articles/linkedin-2020-7-outras-realidades-nos-navegadores', 'png', 'image/png'],
					link: 'https://www.linkedin.com/pulse/outras-realidades-nos-navegadores-marcos-gon%C3%A7alves-de-carvalho-junior/',
					title: 'Outras realidades nos Navegadores',
					platform: 'LinkedIn',
					date: {
						year: 2020,
						month: 7,
					},
				},
				{
					image: ['/images/articles/medium-2018-5-o-que-e-proxy-no-javascript', 'png', 'image/png'],
					link: 'https://medium.com/frontend-quest/o-que-%C3%A9-proxy-no-javascript-b95be3d78109',
					title: 'O que é Proxy no Javascript?',
					platform: 'Medium',
					date: {
						year: 2018,
						month: 5,
					},
				},
				{
					image: ['/images/articles/medium-2018-5-arrow-functions-vs-functions', 'jpg', 'image/png'],
					link: 'https://medium.com/frontend-quest/arrow-functions-vs-functions-9048ec12b5c6',
					title: 'Arrow functions vs Functions',
					platform: 'Medium',
					date: {
						year: 2018,
						month: 5,
					},
				},
			],
			projectsList: projects(mixin),
			jobList: [
				mixin.jobItem(
				'Arena',
					new Map([
						['Engenheiro de software', [[2023, 3]]]
					]),
					'',
					['/images/companies/arena', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Loft',
					new Map([
						['Engenheiro de software', [[2022, 4], [2023, 3]]]
					]),
					'',
					['/images/companies/loft', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Vitta',
					new Map([
						['Desenvolvedor de back end', [[2021, 2], [2022, 4]]],
					]),
					'',
					['/images/companies/vitta', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Infracommerce',
					new Map([
						['Engenheiro DevOps', [[2021, 11], [2022, 2]]],
					]),
					'',
					['/images/companies/infracommerce', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'NEOJETS',
					new Map([
						['Engenheiro de software', [[2021, 6], [2021, 10]]],
					]),
					'',
					['/images/companies/neojets', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'B2W Digital',
					new Map([
						['Engenheiro de software', [[2021, 5], [2021, 9]]],
					]),
					'',
					['/images/companies/b2w', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Groove Tech',
					new Map([
						['Lider de capitulo', [[2021, 2], [2022, 7]]],
						['Lider técnico', [[2020, 5], [2021, 2]]],
					]),
					'',
					['/images/companies/groove', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Dasa',
					new Map([
						['Lider técnico', [[2020, 5], [2021, 2]]],
						['Engenheiro de software', [[2019, 11], [2020, 5]]],
						['Desenvolvedor front end', [[2019, 2], [2019, 11]]],
					]),
					'',
					['/images/companies/dasa', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Santander',
					new Map([
						['Desenvolvedor front-end', [[2018, 10], [2019, 3]]],
					]),
					'',
					['/images/companies/santander', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Everis',
					new Map([
						['Desenvolvedor front-end', [[2018, 10], [2019, 3]]],
					]),
					'',
					['/images/companies/everis', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Serasa',
					new Map([
						['Desenvolvedor web front end', [[2018, 5], [2018, 10]]],
					]),
					'',
					['/images/companies/serasa', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Capitani',
					new Map([
						['Desenvolvedor web front end', [[2018, 5], [2018, 10]]],
					]),
					'',
					['/images/companies/capitani', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Locaweb',
					new Map([
						['Desenvolvedor frontend', [[2017, 10], [2018, 5]]],
					]),
					'',
					['/images/companies/locaweb', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Softclass',
					new Map([
						['Desenvolvedor de software', [[2016, 7], [2017, 10]]],
					]),
					'',
					['/images/companies/softclass', 'gif', 'image/gif'],
				),
			],
			academicList: [
				mixin.academicItem(
					'Ananhaguera',
					'Ciência de dados',
					2024,
					2,
					'Em andamento'
				),
				mixin.academicItem(
					'Metodista',
					'Analise desenvolvimento de sistemas',
					2021,
					2,
					'Incompleto'
				),
				mixin.academicItem(
					'Udacity',
					'Nanodegree React',
					2018,
					5,
					'',
					2018,
					12,
				),
				mixin.academicItem(
					'ETEC',
					'Comunicação visual',
					2015,
					1,
					'',
					2017,
					12,
				),
				mixin.academicItem(
					'ETEC',
					'Desenvolvimento de software',
					2014,
					1,
					'',
					2016,
					12,
				),
				mixin.academicItem(
					'All net',
					'Inglês',
					2009,
					1,
					'',
					2012,
					12,
				),
				mixin.academicItem(
					'All net',
					'Montagem e manutenção de micro',
					2009,
					1,
					'',
					2012,
					12,
				),
			],
		},
	};
};
