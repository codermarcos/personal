import { Informations, Mixins } from ".";

enum TagType {
  categoria = 'categoria',
  tecnologia = 'tecnologia',
}

enum TagCategory {
  estudo = 'estudo',
}

enum TagTecnology {
  python = 'python',
  html = 'html',
  css = 'css',
  js = 'js',
  vue = 'vue',
  react = 'react',
  angular = 'angular',
  rust = 'rust',
  c_sharp = 'c#',
  node = 'node',
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
        ),
        ...mixin.contact(
          'github',
          `github.com/${inf.args.nick}`,
          `https://github.com/${inf.args.nick}`,
        ),
        ...mixin.contact(
          'gmail',
          inf.args.contacts_raw.email,
          `mailto:${inf.args.contacts_raw.email}`,
        ),
        ...mixin.contact(
          'whatsapp',
          inf.args.contacts_raw.phone,
          `https://api.whatsapp.com/send?phone=${inf.args.contacts_raw.phone.replace(/[^0-9]+/g, '')}`,
        ), 
        ...mixin.contact(
          'maps',
          `${inf.args.address.city} - ${inf.args.address.state}`,
          inf.args.address.url,
        ), 
      },
      skillZone: 'Áreas de conhecimento',
      skillZoneDescription: 'Minhas zonas de conhecimento divididas em um gráfico de pizza 4/8 para Frontend, 1/8 para Devops e 3/8 para Backend',
      currently: 'Atualmente',
      monthsOfYear,
      projectsList: [
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
            ['Lider Técnico', [new Date(2020, 4), new Date(2021, 1)]]
          ]),
          '',
          '/images/companies/dasa.gif',
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
      ],
    },
  };
};
