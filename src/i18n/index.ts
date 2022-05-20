import { pt } from './pt';

const informations = {
  meta: {
    'twitter:card': {
      name: 'twitter:card',
      content: 'summary'
    },
    'twitter:site': {
      name: 'twitter:site',
      content: '@codermarcos'
    },
    'twitter:creator': {
      name: 'twitter:creator',
      content: '@codermarcos'
    },
    'og:title': {
      property: 'og:title',
      content: 'Marcos Gonçalves | codermarcos'
    },
    'og:site_name': {
      property: 'og:site_name',
      content: 'codermarcos'
    },
    'og:type': {
      property: 'og:type',
      content: 'profile'
    },
    'profile:first_name': {
      property: 'profile:first_name',
      content: 'Marcos'
    },
    'profile:last_name': {
      property: 'profile:last_name',
      content: 'Gonçalves De Carvalho Junior'
    },
    'profile:gender': {
      property: 'profile:gender',
      content: 'male'
    },
    'profile:username': {
      property: 'profile:username',
      content: 'codermarcos'
    },
    'og:image': {
      property: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/12430365?s=460&u=12d4a3464b5a736061dbd0ccca8f57f6d08902d7&v=4'
    }
  },
  args: {
    title: 'Marcos Gonçalves | codermarcos',
    photo: '/images/profile.jpg',
    name: 'Marcos Gonçalves De Carvalho',
    site: 'http://codermarcos.zone/',
    job: 'Engenheiro de software',
    nick: 'codermarcos',
    contacts_raw: {
      email: 'coder.marcos@gmail.com',
      phone: '55 11 9 7135-3293',
    },
    address: {
      url: 'https://goo.gl/maps/Ggk528AKMLuznEJ27',
      cep: '09750700',
      street: 'Praça Samuel Sabatini',
      city: 'são bernardo do campo',
      state: 'SP',
    },
  },
};

export interface Tags {
  [key: string]: Array<string>
}

const mixins = {
  contact(name: string, text: string, href: string, microformats: string) {
    return {
      [name]: { text, href, microformats },
    };
  },
  projectItem(
    name: string,
    description: string,
    details: string,
    year: number,
    month: number,
    tags: Tags
  ) {
    return {
      summary: {
        name,
        description,
      },
      details,
      date: {
        year,
        month,
      },
      tags,
    };
  },
  jobItem(
    company: string,
    roles: Map<string, [Date, Date] | [Date]>,
    details: string,
    logo?: string,
  ) {
    return {
      company,
      logo,
      roles,
      details,
    };
  },
  academicItem(
    school: string,
    course: string,
    startYear: number,
    startMonth: number,
    state: string,
    endYear?: number,
    endMonth?: number,
  ) {
    return {
      summary: {
        school,
        course,
      },
      start: {
        year: startYear,
        month: startMonth,
      },
      end:
        state === ''
          ? { year: endYear, month: endMonth }
          : state,
    };
  },
};

const langs = {
  pt: pt(informations, mixins),
};

export type Informations = typeof informations;
export type Mixins = typeof mixins;

export default langs;
