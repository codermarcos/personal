import { Informations, Mixins } from ".";

enum TagType {
  categoria = 'categoria',
  tecnologia = 'tecnologia',
}

enum TagCategory {
  estudo = 'estudo',
  trabalho = 'trabalho',
}

enum TagTecnology {
  python = 'python',
  html = 'html',
  css = 'css',
  js = 'js',
  vue = 'vue',
  react = 'react',
  redux = 'redux',
  redux_sagas = 'redux sagas',
  angularjs = 'angularjs',
  angular = 'angular',
  svelte = 'svelte',
  rust = 'rust',
  c_sharp = 'c#',
  delphi = 'delphi',
  c = 'c',
  c_pp = 'c++',
  node = 'node',
  ionic = 'ionic',
  typescript = 'typescript',
  javascript = 'javascript',
  firebird = 'firebird',
  moongo = 'moongo',
  mysql = 'mysql',
  postgress = 'postgress',
  entity = 'entity',
  websockets = 'websockets',
  graphql = 'graphql',
  nuxt = 'nuxt',
  nest = 'nest',
  next = 'next',
  express = 'express',
  loopback = 'loopback',
  grpc = 'grpc',
  docker = 'docker',
  k8s = 'k8s',
  azure = 'azure',
  aws = 'aws',
  gcp = 'gcp',
}

export const pt = (inf: Informations, mixin: Mixins) => {
  const description = 'Sou Marcos Gonçalves ou codermarcos um software engenieer especialista em frontend, aqui tem pouco da minhas experiencias profissionais.';
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

  return {
    meta: {
      ...inf.meta,
      'description': {
        name: 'description',
        content: description,
      },
      'og:locale': {
        property: 'og:locale',
        content: 'pt_BR'
      },
      'og:description': {
        property: 'og:description',
        content: description,
      },
    },
    args: {
      ...inf.args,
      ...durations,
      seeRecent: 'ver recentes',
      seePrevious: 'ver anteriores',
      articlesAndPosts: 'Artigos e posts',
      projects: 'Projetos',
      academic: 'Formação academica',
      experiences: 'Experiências profissionais',
      photoAlt: 'Foto de Marcos Gonçalves (codermarcos)',
      aboutMe: 'Sou um engenheiro de software que está em uma capacitação infinita buscando melhorar minha competências com tecnologia para Frontend em projetos pessoais, acadêmicos, e open source que provocam-me alterações químicas chamadas de Paixão. Na minha jornada prezo muito o compartilhamento de tudo que aprendi, desenvolvendo minha sensibilidade, evoluindo não apenas tecnicamente mas também como pessoa.',
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
          inf.args.contacts_raw.email,
          `mailto:${inf.args.contacts_raw.email}`,
          'h-adr',
        ),
        ...mixin.contact(
          'whatsapp',
          inf.args.contacts_raw.phone,
          `https://api.whatsapp.com/send?phone=${inf.args.contacts_raw.phone.replace(/[^0-9]+/g, '')}`,
          'h-adr',
        ), 
        ...mixin.contact(
          'maps',
          `${inf.args.address.city} - ${inf.args.address.state}`,
          inf.args.address.url,
          'h-adr',
        ), 
      },
      skillZone: 'Áreas de conhecimento',
      skillZoneDescription: 'Minhas zonas de conhecimento divididas em um gráfico de pizza 4/8 para Frontend, 1/8 para Devops e 3/8 para Backend',
      currently: 'Atualmente',
      monthsOfYear,
      articlesAndPostsList: [
        {
          image: '/images/articles/linkedin-2020-7.png',
          link: 'https://www.linkedin.com/pulse/outras-realidades-nos-navegadores-marcos-gon%C3%A7alves-de-carvalho-junior/',
          title: 'Outras realidades nos Navegadores',
          platform: 'LinkedIn',
          date: {
            year: 2020,
            month: 7, 
          },
        },
        {
          image: '/images/articles/medium-2018-5.png',
          link: 'https://medium.com/frontend-quest/o-que-%C3%A9-proxy-no-javascript-b95be3d78109',
          title: 'O que é Proxy no Javascript?',
          platform: 'Medium',
          date: {
            year: 2018,
            month: 5, 
          },
        },
        {
          image: '/images/articles/medium-2018-5.jpeg',
          link: 'https://medium.com/frontend-quest/arrow-functions-vs-functions-9048ec12b5c6',
          title: 'Arrow functions vs Functions',
          platform: 'Medium',
          date: {
            year: 2018,
            month: 5, 
          },
        },
      ],
      projectsList: [
        // "personal", 23 Jul 2021
        // "simple-mask-money", 4 Sep 2017
        // "resume", 4 May 2021
        // "dev-dark-theme", 2 Dec 2017
        // "rust-simple-parser", 26 Oct 2020
        // "csx", 30 Nov 2020
        // "vue-cli", 6 Oct 2020
        mixin.projectItem(
          'react-typescript',
          'Um projeto com React para usar como template de setup para outros projetos.',
          '',
          2020,
          9,
          'pessoal',
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
          'Meu segundo projeto em rust implementando um editor de markdown usando uma api websockets',
          '',
          2020,
          7,
          'pessoal',
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
          'Meu primeiro projeto usando rust implementando alguns algoritimos de ordenação',
          '',
          2020,
          7,
          'pessoal',
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
          'Pequena pock sobre micro frontends',
          '',
          2020,
          1,
          'freela',
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
          'Um site adulto para streamming de video',
          '',
          2019,
          10,
          'freela',
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
          'pock-graphql-middleware',
          'Uma prova de conceito para testar o quanto eficiente seria usar GraphQL como BFF',
          '',
          2019,
          5,
          'pessoal',
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
          'Um pacote com o script para impletação de um jogo da velha',
          '',
          2019,
          4,
          'pessoal',
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
          'Uma api para jogar jogo da velha usando um pacote que criei, junto com webscokets',
          '',
          2019,
          4,
          'pessoal',
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
          'manifest-app-web',
          'Site que criei para controlar passageiros em um avião durante o salto, controle de equipamentos etc..',
          '',
          2019,
          2,
          'pessoal',
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
          'pessoal',
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
          'Api para um site para indexar videos adultos de todos os sites',
          '',
          2019,
          1,
          'pessoal',
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
          'Código de um altimetro que criei para coletar dados durante um salto de paraquedas',
          '',
          2018,
          12,
          'pessoal',
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
          'pessoal',
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
          'angular-cli',
          'Contribuição para documentação incluindo alguns detalhes para facilitar o entendimento',
          '',
          2018,
          9,
          'pessoal',
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
          'fake-api-web',
          'Aplicação que disponibilizava uma forma de mockar APIs baseado em contratos, gerando dados fakes ou randomicos.',
          '',
          2018,
          6,
          'pessoal',
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
          'pessoal',
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
          'notes',
          'Uma trilha de estudos que iniciei criado por mim mesmo.',
          '',
          2018,
          5,
          'pessoal',
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
          'pessoal',
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
          'pessoal',
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
          'pessoal',
          {
            [TagType.categoria]: [
              TagCategory.estudo,
            ],
            [TagType.tecnologia]: [
              TagTecnology.node,
              TagTecnology.html,
              TagTecnology.css,
            ],
          },
        ),       
        mixin.projectItem(
          'CLOUDClass',
          'Um sistema verificava o status de sincronização do dados do ERP com o servidor de Backup.',
          '',
          2017,
          2,
          'Softclass',
          {
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
          'Softclass',
          {
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
          'Softclass',
          {
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
          'pessoal',
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
          'pessoal',
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
          'Softclass',
          {
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
          'Softclass',
          {
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
          'Softclass',
          {
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
          'Softclass',
          {
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
          'faculdade',
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
          'faculdade',
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
          'curso',
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
      ],
      jobList: [
        mixin.jobItem(
          'Groove Tech',
          new Map([
            ['Lider de Capitulo', [new Date(2021, 1)]]
          ]),
          '',
          '/images/companies/groove.gif',
        ),
        mixin.jobItem(
          'Dasa',
          new Map([
            ['Lider Técnico', [new Date(2020, 4), new Date(2021, 1)]],
            ['Engenheiro de software', [new Date(2019, 11), new Date(2020, 4)]],
            ['Desenvolvedor frontend', [new Date(2019, 3), new Date(2019, 11)]],
          ]),
          '',
          '/images/companies/dasa.gif',
        ),
        mixin.jobItem(
          'Everis',
          new Map([
            ['Desenvolvedor frontend', [new Date(2018, 10), new Date(2019, 3)]],
          ]),
          '',
          '/images/companies/everis.gif',
        ),
        mixin.jobItem(
          'Santander',
          new Map([
            ['Desenvolvedor frontend', [new Date(2018, 10), new Date(2019, 3)]],
          ]),
          '',
          '/images/companies/santander.gif',
        ),
        mixin.jobItem(
          'Serasa',
          new Map([
            ['Desenvolvedor frontend', [new Date(2018, 5), new Date(2018, 10)]],
          ]),
          '',
          '/images/companies/serasa.gif',
        ),
        mixin.jobItem(
          'Locaweb',
          new Map([
            ['Desenvolvedor frontend', [new Date(2017, 10), new Date(2018, 3)]],
          ]),
          '',
          '/images/companies/locaweb.gif',
        ),
        mixin.jobItem(
          'Softclass',
          new Map([
            ['Desenvolvedor frontend', [new Date(2016, 7), new Date(2018, 3)]],
          ]),
          '',
          '/images/companies/softclass.gif',
        ),
      ],
      academicList: [
        mixin.academicItem(
          'Metodista',
          'Analise Desenvolvimento De Sistemas',
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
