import { style, cssRule, media } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { border, color, em, padding, percent, px, translateY } from 'csx';

const size = new Proxy<any>({}, {
  get: (_: any, size: any) => 
    typeof size === 'string' 
      ? Number(parseInt(size) * 0.22).toFixed(2) 
      : 0,
});

cssRule('*, *::after, *::before', {
  boxSizing: 'border-box',
  fontSize: percent(100),
  fontFamily: 'Arial',
  padding: 0,
  margin: 0
});

cssRule('html, body', {
  height: '100vh',
  width: '100vw',
});

cssRule('ul, ol', {
  listStyle: 'none',
});

const mobile = (properties: NestedCSSProperties) => media({ maxWidth: px(480) }, properties);

// const tablet = (properties: NestedCSSProperties) => media({ minWidth: px(480), maxWidth: px(780) }, properties);

const headerWrapper = style({
  display: 'grid',
  columnGap: em(size[8]),
  gridRow: '2 / 3',
  gridColumn: '2 / 3',
  gridTemplateColumns: `${em(size[48])} auto`,
  gridTemplateRows: `${em(size[24])} ${em(size[24])} ${em(size[5])} auto`,
}, mobile({
  columnGap: em(size[2]),
  gridTemplateColumns: `${em(size[24])} auto`,
  gridTemplateRows: `${em(size[5])} ${em(size[5])} ${em(size[2])} ${em(size[28])} ${em(size[2])} auto`,
}));

const headerPhoto = style({
  borderRadius: percent(100),
  overflow: 'hidden',
  gridRow: '1 / 3',
  $nest: {
    '& img': {
      width: percent(100),
    },
  },
}, mobile({
  gridRow: '1 / 5',
  alignSelf: 'center',
  $nest: {
    '& figure': {
      marginBottom: px(10),
    },
  },
}));

const headerAbout = style({
  textAlign: 'justify',
  gridColumn: '1 / 3',
  gridRow: '4 / 4',
}, mobile({
  gridRow: '6 / 6',
}));

const headerNameAndJob = style({
  $nest: {
    '& h1': {
      fontSize: em(size[9]),
    },
    '& h2': {
      fontSize: em(size[6]),
    },
  }
}, mobile({
  alignSelf: 'center',
  gridRow: '1 / 3',
  $nest: {
    '& h1': {
      fontSize: em(size[5]),
    },
    '& h2': {
      fontSize: em(size[5]),
    },
  }
}));

const headerContacts = style({
  display: 'grid',
  gridGap: em(size[4]),
  gridTemplateColumns: '1fr 1fr',
  $nest: {
    '& a': {
      textDecoration: 'none',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& svg': {
      width: em(size[6]),
      fill: color('#000000').toHexString(),
      marginRight: em(size[2]),
    },
  },
}, mobile({
  gridTemplateColumns: '1fr',
  $nest: {
    '& li': {
      height: em(size[4]),
    },
  },
}));

const headerContactsWrapper = style({  
  display: 'flex',
  alignItems: 'center',
  fontSize: em(size[4]),
  textTransform: 'uppercase',
  $nest: {
    '& figure': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}, mobile({
  gridRow: '4 / 4',
  gridColumn: '2 / 3',
  fontSize: em(size[3]),
  justifyContent: 'space-between',
}));

const contentWrapper = style({
  gridColumn: '2 / 3',
  gridRow: '4 / 4',
});

const graphPeace = style({
  fill: 'transparent',
});

const graphPeaceStroke = style({
  fill: '#000000',
});

const skillsZone = style({
  justifyContent: 'space-between',
  flexDirection: 'column',
  fontWeight: 600,
  display: 'flex',
  $nest: {
    '&::before': {
      transform: translateY(percent(-50)),
      content: 'attr(aria-label)',
      position: 'absolute',
      fontSize: em(size[6]),
      top: percent(50),
      left: 0,
    },
    '& svg': {
      fill: '#000000',
      width: em(size[7]),
      marginRight: em(size[5]),
    },
  },
}, mobile({  
  $nest: {
    '&::before': {
      transform: translateY(0),
      fontSize: em(size[5]),
      top: percent(0),
    },
  },
}));

const contentSkills = style({
  justifyContent: 'flex-end',  
  marginBottom: em(size[8]),
  position: 'relative',
  display: 'flex',
  $nest: {
    '& > svg': {
      width: em(size[85]),
    },
  },
}, mobile({  
  paddingTop: em(size[10]),
}));

const contentProjects = style({  
  display: 'flex',
  marginBottom: em(size[8]),
});

const fullList: NestedCSSProperties = {  
  flexDirection: 'column',
  position: 'relative',
  width: percent(100),
  paddingTop: em(size[12]),
  display: 'flex',
  $nest: {
    '&::before': {
      content: 'attr(aria-label)',
      position: 'absolute',
      fontSize: em(size[6]),
      left: 0,
      top: em(size[2]),
    },
  },
};

const borderShare = border({ style: 'solid', color: '#000', width: 1 });

const projectsList = style(fullList);

const paddingTopDown = size[2];
const paddingSides = size[3];

const sharedCategory: NestedCSSProperties = {
  paddingBottom: em(paddingTopDown),
  paddingTop: em(paddingTopDown),
  border: borderShare,
};

const borderRadius = em(size[2]);

const projectCategories = style({
  display: 'flex',
  marginTop: em(0.8),
  $nest: {
    '& dt': {
      ...sharedCategory,
      maxWidth: 0,
      overflow: 'hidden',
      transitionTimingFunction: 'ease-in-out, ease-in-out',
      transitionProperty: 'max-width, padding-right',
      transitionDuration: '.5s, .6s',
      paddingRight: 0,
      paddingLeft: em(paddingSides),
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 'none',
      $nest: {
        '&.active': {
          maxWidth: percent(100),
          paddingRight: em(paddingSides),
        },
      },
    },
    '& dd': {
      ...sharedCategory,
      marginRight: em(size[3]),
      paddingRight: em(paddingSides),
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderLeft: 'none',
    },
  },
});

const listItem: NestedCSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  border: borderShare,
  minHeight: em(size[32]),
  marginBottom: em(size[4]),
  borderRadius: borderRadius,
  padding: padding(em(size[4])),
  justifyContent: 'space-between',
  $nest: {
    '& > details': {
      width: percent(100),
    },
    '& > span': {
      fontSize: em(0.8),
      alignSelf: 'flex-end',
    },
    '& p': {
      width: percent(100),
    },
  },
};

const projectItem = style({
  ...listItem,
  $nest: {
    ...listItem.$nest,
    '& > details': {
      width: percent(100),
    },
    [`& > time, & > .${projectCategories}`]: {
      fontSize: em(0.8),
      alignSelf: 'flex-end',
    },
    '& b': {
      fontSize: em(1.6),
      marginRight: em(1.2),
    },
  },
}, mobile({
  $nest: {
    '& summary': {
      display: 'flex',
      flexWrap: 'wrap',
    },    
    '& b': {
      marginBottom: em(size[1]),
      display: 'list-item',
      marginRight: 0,
    },
  },
}));

const contentSecundary = style({
  display: 'grid',
  gridGap: em(size[8]),
  marginBottom: em(size[8]),
  gridTemplateColumns: '1fr 1fr',
}, mobile({
  gridTemplateColumns: '1fr',
}));

const experiencesList = style(fullList);
const experiencesItem = style({
  ...listItem,
  flexWrap: 'nowrap',
  minHeight: em(size[28]),
  justifyContent: 'flex-start',
  $nest: {
    ...listItem.$nest,       
    '& > details': {
      width: percent(100),
      display: 'list-item',
      listStyle: 'inside disclosure-closed',
    }, 
    '& summary': {
      minHeight: em(size[4]),
      display: 'inline-flex',
      flexDirection: 'column',
    },    
    '& > img': {      
      marginRight: em(size[3]),
      width: em(size[20]),
    },
    '& b': {
      marginBottom: em(size[1]),
      flexWrap: 'wrap',
      display: 'flex',
    },
  }
});

const academicList = style(fullList);
const academicItem = style({
  ...listItem,
  minHeight: em(size[28]),
  $nest: {
    ...listItem.$nest,
  }
});

const styles = {
  body: style({
    display: 'grid',
    gridTemplateRows: '25px min-content 20px auto',
    gridTemplateColumns: 'auto 720px auto',
  }, mobile({
    gridTemplateColumns: 'auto 360px auto',
  })),
  headerWrapper,
  headerPhoto,
  headerAbout,
  headerNameAndJob,
  headerContactsWrapper,
  headerContacts,
  contentWrapper,
  contentSkills,
  graphPeace,
  graphPeaceStroke,
  skillsZone,
  contentProjects,
  projectsList,
  projectItem,
  projectCategories,
  contentSecundary,
  experiencesList,
  experiencesItem,
  academicList,
  academicItem,
};

export default styles;