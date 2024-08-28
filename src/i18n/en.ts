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
    email: 'codermarcos@gmail.com',
    phone: '11971353293',
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
        content: 'codermarcos - Experiences of Marcos Gonçalves De Carvalho'
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
        content: 'codermarcos, Marcos Gonçalves De Carvalho, Frontend, Backend, Devops, Programmer, Developer, Engineer'
      },
    },
    args: {
      ...inf.args,
      ...durations,
      title: 'codermarcos - Site oficial de Marcos Gonçalves De Carvalho',
      job: 'Software engineer',
      nick: 'codermarcos',
      contacts_raw,
      address,
      language: 'en-US',
      from: 'From',
      to: 'To',
      seePrevious: 'see previous',
      articlesAndPosts: 'Articles and posts',
      projects: 'Projects',
      academic: 'Education',
      experiences: 'Experience',
      photoAlt: 'Photo Marcos Gonçalves (codermarcos)',
      aboutMe: 'I am a <strong>software engineer</strong> passionate about technology, always seeking knowledge and challenges. \
      With extensive experience in software development, I am driven by the desire to learn and share knowledge. These have been my main motivations: \
      🔀 Knowledge Sharing and collaboration. I value sharing insights with colleagues and industry professionals. \
      ❤️ Passion for Technology I am motivated by innovation and the positive impact that technology can have on people and organizations. \
      🔗 Professional Connections I aim to build lasting and meaningful relationships that go beyond the workplace. \
      Some of my expertise areas are <strong>Cloud Computing</strong>: Specialized in <strong>AWS</strong>, with experience in <strong>Infrastructure as Code (IaC)</strong> tools such as <strong>Terraform, Pulumi, AWS CloudFormation,</strong> and <strong>AWS CDK</strong>. \
      <strong>Backend Development</strong>: Deep knowledge of <strong>Node.js</strong>, with experience in <strong>Python</strong> and a strong passion for <strong>Rust</strong>. \
      <strong>Frontend Development</strong>: Experienced with frameworks and libraries like <strong>React, Preact, Angular, AngularJS</strong>, and <strong>Vue</strong>. \
      I have always been looking for opportunities to learn, grow, and contribute to innovative projects and dynamic teams.',
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
            ['Software engineer', [[2023, 3]]]
          ]),
          '',
          ['/images/companies/arena', 'gif', 'image/gif'],
        ),
        mixin.jobItem(
          'Loft',
          new Map([
            ['Software engineer', [[2022, 4], [2023, 3]]]
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
            ['DevOps engineer', [[2021, 11], [2022, 2]]],
          ]),
          '',
          ['/images/companies/infracommerce', 'gif', 'image/gif'],
        ),
        mixin.jobItem(
          'NEOJETS',
          new Map([
            ['Software engineer', [[2021, 6], [2021, 10]]],
          ]),
          '',
          ['/images/companies/neojets', 'gif', 'image/gif'],
        ),
        mixin.jobItem(
          'B2W Digital',
          new Map([
            ['Software engineer', [[2021, 5], [2021, 9]]],
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
            ['Software engineer', [[2019, 11], [2020, 5]]],
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
          'Ananhaguera',
          'Data science',
          2024,
          2,
          'In progress'
        ),
        mixin.academicItem(
          'Metodista',
          'Analisys and development of systems',
          2021,
          2,
          'Unfinished'
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
