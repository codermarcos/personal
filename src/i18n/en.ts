import { Informations, Mixins } from '.';
import projects from './en-projects';

export const en = (inf: Informations, mixin: Mixins): any => {
	const description = 'Marcos Gonçalves or codermarcos is a software engineer who loves challenges and solving problems. Here is a brief overview of his career.';
	const monthsOfYear = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const durations = {
		days: 'days',
		years: 'years',
		months: 'months',
	};

	const	contacts_raw = {
		email: 'codermarcos.au@gmail.com',
		phone: '61 0405 332 133',
	};

	const address = {
		url: 'https://goo.gl/maps/wSyQ7535MxF5MASx5',
		cep: '2038',
		street: '17 Parramatta',
		city: 'Sydney',
		state: 'NSW',
	};

	return {
		meta: {
			...inf.meta,
			'description': {
				name: 'description',
				content: description,
			},
			'og:locale': {
				property: 'og:locale',
				content: 'en_US'
			},
			'og:description': {
				property: 'og:description',
				content: description,
			},
			keywords: {
				name: 'keywords',
				content: 'codermarcos, Marcos Gonçalves De Carvalho, Frontend, Backend, Devops, Programmer, Developer, Engnieer'
			},
		},
		args: {
			...inf.args,
			...durations,
			job: 'Software engnieer',
			nick: 'codermarcos',
			contacts_raw,
			address,
			language: 'en-US',
			seeRecent: 'see recents',
			seePrevious: 'see previous',
			articlesAndPosts: 'Articles and posts',
			projects: 'Projects',
			academic: 'Education',
			experiences: 'Experiences',
			photoAlt: 'Photo Marcos Gonçalves (codermarcos)',
			aboutMe: 'I am a software engineer who is on an ✨ endless journey in search of knowledge. During this journey, I value greatly 🔀 The exchange of experiences ❤️ Working with what I love (technology) 🔗 Creating connections that go beyond work. I have worked with digital products, startups, banks, consulting firms, and agencies, and have always kept my hands dirty. In my previous roles, I encountered various challenges that allowed me to develop both my soft and hard skills. Here, there are a few projects on which I\'e worked.',
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
					'phone',
					contacts_raw.phone,
					`telto:${contacts_raw.phone.replace(/[^0-9]+/g, '')}`,
					'h-adr',
				),
				...mixin.contact(
					'maps',
					`${address.city} - ${address.state}`,
					address.url,
					'h-adr',
				),
			},
			skillZone: 'Branches of learning',
			skillZoneDescription: 'My branches of learning splited into pizza chart 4/8 to Frontend, 1/8 to Devops and 3/8 to Backend',
			currently: 'Currently',
			monthsOfYear,
			articlesAndPostsList: [
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
						['Software engnieer', [[2023, 3]]]
					]),
					'',
					['/images/companies/arena', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Loft',
					new Map([
						['Software engnieer', [[2022, 4], [2023, 3]]]
					]),
					'',
					['/images/companies/loft', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Vitta',
					new Map([
						['Back end developer', [[2021, 2], [2022, 4]]],
					]),
					'',
					['/images/companies/vitta', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Infracommerce',
					new Map([
						['DevOps engnieer', [[2021, 11], [2022, 2]]],
					]),
					'',
					['/images/companies/infracommerce', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'NEOJETS',
					new Map([
						['Software engnieer', [[2021, 6], [2021, 10]]],
					]),
					'',
					['/images/companies/neojets', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'B2W Digital',
					new Map([
						['Software engnieer', [[2021, 5], [2021, 9]]],
					]),
					'',
					['/images/companies/b2w', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Groove Tech',
					new Map([
						['Chapter leader', [[2021, 2], [2022, 7]]],
						['Technical leader', [[2020, 5], [2021, 2]]],
					]),
					'',
					['/images/companies/groove', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Dasa',
					new Map([
						['Technical leader', [[2020, 5], [2021, 2]]],
						['Software engnieer', [[2019, 11], [2020, 5]]],
						['Front end developer', [[2019, 2], [2019, 11]]],
					]),
					'',
					['/images/companies/dasa', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Santander',
					new Map([
						['Front-end developer', [[2018, 10], [2019, 3]]],
					]),
					'',
					['/images/companies/santander', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Everis',
					new Map([
						['Front-end developer', [[2018, 10], [2019, 3]]],
					]),
					'',
					['/images/companies/everis', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Serasa',
					new Map([
						['Web developer front end', [[2018, 5], [2018, 10]]],
					]),
					'',
					['/images/companies/serasa', 'gif', 'image/gif'],
				),
				mixin.jobItem(
					'Capitani',
					new Map([
						['Web developer front end', [[2018, 5], [2018, 10]]],
					]),
					'',
					['/images/companies/capitani', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Locaweb',
					new Map([
						['Frontend developer', [[2017, 10], [2018, 5]]],
					]),
					'',
					['/images/companies/locaweb', 'gif', 'image/gif'],
				),

				mixin.jobItem(
					'Softclass',
					new Map([
						['Software developer', [[2016, 7], [2017, 10]]],
					]),
					'',
					['/images/companies/softclass', 'gif', 'image/gif'],
				),
			],
			academicList: [
				mixin.academicItem(
					'Metodista',
					'Analisys and development of systems',
					2021,
					2,
					'Trancado'
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
					'Visual communication',
					2015,
					1,
					'',
					2017,
					12,
				),
				mixin.academicItem(
					'ETEC',
					'Software development',
					2014,
					1,
					'',
					2016,
					12,
				),
				mixin.academicItem(
					'All net',
					'English',
					2009,
					1,
					'',
					2012,
					12,
				),
				mixin.academicItem(
					'All net',
					'Hardware maintenance',
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
