import { style, cssRule, media } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { border, calc, color, em, margin, padding, percent, px, rgba, translateY, viewWidth } from 'csx';

const size = (n: number): number => parseFloat(Number(parseInt(n.toFixed(0)) * 0.22).toFixed(2));

const scrollStyle = () => ({
	'&::-webkit-scrollbar': {
		width: em(size(2)),
		height: em(size(2)),
		borderRadius: borderRadius,
	},

	'&::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
		borderRadius: borderRadius,
	},

	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'darkgrey',
		outline: '1px solid slategrey',
		borderRadius: borderRadius,
	},
})


cssRule('*, *::after, *::before', {
	boxSizing: 'border-box',
	fontSize: percent(100),
	fontFamily: 'Arial',
	padding: 0,
	margin: 0
});

cssRule('html, body', {
	height: '100vh',
	width: '100%',
});

cssRule('body', {
	$nest: { ...scrollStyle() },
})

cssRule('ul, ol', {
	listStyle: 'none',
});

const mobileSM = (properties: NestedCSSProperties) => media({ maxWidth: px(320) }, properties);

const mobileMD = (properties: NestedCSSProperties) => media({ maxWidth: px(480) }, properties);

// const tablet = (properties: NestedCSSProperties) => media({ minWidth: px(480), maxWidth: px(780) }, properties);

const headerPhotoSizeDesktop = em(size(48));
const headerPhotoSizeMobile = em(size(24));

const borderRadius = em(size(2));

const headerWrapper = style({
	display: 'grid',
	columnGap: em(size(8)),
	gridRow: '2 / 3',
	gridColumn: '2 / 3',
	gridTemplateColumns: `${headerPhotoSizeDesktop} auto`,
	gridTemplateRows: `${em(size(24))} ${em(size(24))} ${em(size(5))} auto`,
}, mobileMD({
	columnGap: em(size(2)),
	gridTemplateColumns: `${headerPhotoSizeMobile} auto`,
	gridTemplateRows: `${em(size(5))} ${em(size(5))} ${em(size(2))} ${em(size(28))} ${em(size(2))} auto`,
}), mobileSM({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	$nest: {
		'& > figure': {
			margin: margin(em(size(10)), 0, 0),
		},
		'& > hgroup': {
			margin: margin(em(size(5)), 0),
		},
		'& > nav': {
			margin: margin(0, 0, em(size(10))),
		},
	},
}));

const headerPhoto = style({
	borderRadius: percent(100),
	overflow: 'hidden',
	gridRow: '1 / 3',
	$nest: {
		'& img': {
			width: percent(100),
			height: percent(100),
		},
	},
}, mobileMD({
	gridRow: '1 / 5',
	alignSelf: 'center',
	$nest: {
		'& figure': {
			marginBottom: px(10),
		},
	},
}), mobileSM({
	$nest: {
		'& img': {
			width: calc(`${viewWidth(100)} - ${em(size(24))}`),
		},
	},
}));

const headerAbout = style({
	textAlign: 'justify',
	gridColumn: '1 / 3',
	gridRow: '4 / 4',
}, mobileMD({
	gridRow: '6 / 6',
}));

const headerNameAndJob = style({
	$nest: {
		'& h1': {
			fontSize: em(size(9)),
		},
		'& h2': {
			fontSize: em(size(6)),
		},
	}
}, mobileMD({
	alignSelf: 'center',
	gridRow: '1 / 3',
	$nest: {
		'& h1': {
			fontSize: em(size(5)),
		},
		'& h2': {
			fontSize: em(size(5)),
		},
	}
}));

const headerContactsSize = em(size(6));

const headerContacts = style({
	display: 'grid',
	gridGap: em(size(4)),
	gridTemplateColumns: '1fr 1fr',
	$nest: {
		'& a': {
			textDecoration: 'none',
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
		'& svg': {
			width: headerContactsSize,
			fill: color('#000000').toHexString(),
			marginRight: em(size(2)),
		},
	},
}, mobileMD({
	gridTemplateColumns: '1fr',
	$nest: {
		'& li': {
			height: em(size(4)),
		},
	},
}));

const headerContactsWrapper = style({
	display: 'flex',
	alignItems: 'center',
	fontSize: em(size(4)),
	textTransform: 'uppercase',
	$nest: {
		'& figure': {
			display: 'flex',
			alignItems: 'center',
		},
	},
}, mobileMD({
	gridRow: '4 / 4',
	gridColumn: '2 / 3',
	fontSize: em(size(3)),
	justifyContent: 'space-between',
}));

const listTitleSpace = size(12);
const litsItemHeight = size(32);
const litsItemSpaceBottom = size(4);

const halfContent: NestedCSSProperties = {
	display: 'grid',
	position: 'relative',
	marginTop: em(size(8)),
	gridRowGap: em(litsItemSpaceBottom),
	marginBottom: em(size(8)),
	paddingTop: em(listTitleSpace),
	gridTemplateRows: `${em(size(4))} auto ${em(size(4))}`,
};

const contentExperiences = style(halfContent, mobileMD({ gridColumn: '1 / 3' }));
const contentAcademic = style(halfContent, mobileMD({ gridColumn: '1 / 3' }));

const contentWrapper = style({
	display: 'grid',
	gridRow: '4 / 4',
	gridColumn: '2 / 3',
	gridColumnGap: em(size(8)),
	gridTemplateColumns: '1fr 1fr',
	$nest: {
		[`& > section:not(.${contentExperiences}, .${contentAcademic})`]: {
			gridColumn: '1 / 3',
		}
	}
}, mobileMD({
	gridTemplateColumns: '1fr',
}));

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
			fontSize: em(size(6)),
			top: percent(50),
			left: 0,
		},
	},
}, mobileMD({
	$nest: {
		'&::before': {
			transform: translateY(0),
			fontSize: em(size(5)),
			top: percent(0),
		},
	},
}));

const contentSkillsGraphSize = em(size(85));

const contentSkills = style({
	justifyContent: 'flex-end',
	marginBottom: em(size(8)),
	marginTop: em(size(8)),
	position: 'relative',
	display: 'flex',
	$nest: {
		'& > svg': {
			width: contentSkillsGraphSize,
		},
	},
}, mobileMD({
	paddingTop: em(size(10)),
}));

const contentProjects = style({
	display: 'grid',
	position: 'relative',
	marginBottom: em(size(8)),
	marginTop: em(size(8)),
	gridRowGap: em(litsItemSpaceBottom),
	paddingTop: em(listTitleSpace),
	gridTemplateRows: `${em(size(4))} auto ${em(size(4))}`,
});

const fullList: NestedCSSProperties = {
	maxHeight: em(size(125)),
	flexDirection: 'column',
	width: percent(100),
	overflow: 'auto',
	cursor: 'pointer',
	display: 'flex',
	$nest: {
		...scrollStyle(),
		'&::before': {
			content: 'attr(aria-label)',
			fontSize: em(size(6)),
			position: 'absolute',
			left: 0,
			top: 0,
		},
	},
};

const borderShare = border({ style: 'solid', color: '#000', width: 1 });

const projectsList = style({
	...fullList,
	gridRowStart: 2,
	maxHeight: em(litsItemHeight * 5),
});

const paddingTopDown = size(2);
const paddingSides = size(3);

const sharedCategory: NestedCSSProperties = {
	paddingBottom: em(paddingTopDown),
	paddingTop: em(paddingTopDown),
	maxHeight: em(size(10)),
	border: borderShare,
};

const projectCategories = style({
	display: 'flex',
	marginTop: em(0.8),
	overflow: 'auto',
	paddingBottom: em(size(2)),
	$nest: {
		...scrollStyle(),
		'&.print': {
			flexWrap: 'wrap',
			$nest: {
				'& dt': {
					display: 'none',
				},
				'& dd': {
					border: borderShare,
					maxWidth: percent(100),
					padding: em(paddingSides),
					borderRadius: borderRadius,
					marginBottom: em(size(4)),
					$nest: {
						'&:last-child': {
							marginBottom: 0,
						},
					},
				},
			},
		},

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
					overflow: 'initial',
				},
			},
		},
		'& dd': {
			...sharedCategory,
			marginRight: em(size(3)),
			paddingRight: em(paddingSides),
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderTopRightRadius: borderRadius,
			borderBottomRightRadius: borderRadius,
			borderLeft: 'none',
			whiteSpace: 'nowrap',
		},
	},
});

const listItem: NestedCSSProperties = {
	display: 'flex',
	flexWrap: 'wrap',
	border: borderShare,
	marginBottom: em(litsItemSpaceBottom),
	borderRadius: borderRadius,
	padding: padding(em(size(4))),
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
		'& summary': {
			display: 'flex',
			alignItems: 'center',
			listStyle: 'none',
			justifyContent: 'space-between',
			height: em(size(10)),
		},
		'& > details': {
			width: percent(100),
		},
		'& > details[open] b::before': {
			content: '" ▼"',
		},
		'& > details:not([open]) b::before': {
			content: '" ►"',
		},
		[`& > details > time, & > .${projectCategories}`]: {
			fontSize: em(size(4)),
			alignSelf: 'flex-end',
		},
		'& b': {
			fontSize: em(1.6),
			marginRight: em(1.2),
		},
	},
}, mobileMD({
	$nest: {
		'& summary': {
			display: 'flex',
			flexWrap: 'wrap',
		},
		'& b': {
			marginBottom: em(size(1)),
			display: 'list-item',
			marginRight: 0,
		},
		'&:not(.open)': {
			minHeight: em(size(50)),
		},
	},
}));

const experienceImageSize = em(size(21));

const experiencesList = style({
	...fullList,
	gridRowStart: 2,
});

const experiencesItem = style({
	...listItem,
	opacity: 1,
	flexWrap: 'nowrap',
	alignItems: 'center',
	transition: '.4s ease-in transform, .5s ease-out opacity',
	$nest: {
		...listItem.$nest,
		'& > details': {
			width: percent(100),
			display: 'list-item',
			listStyle: 'inside disclosure-closed',
		},
		'& > details > ol': {
			marginLeft: px(17),
		},
		'& > details > ol > li': {
			justifyContent: 'space-between',
			marginTop: em(size(4)),
			flexWrap: 'wrap',
			display: 'flex',
		},
		'&:not(.open)': {
			minHeight: em(litsItemHeight),
		},
		'& > details[open] ~ picture': {
			alignSelf: 'flex-start',
		},
		'& summary': {
			display: 'inline-flex',
			flexDirection: 'column',
			minHeight: experienceImageSize,
		},
		'& summary > time': {
			fontSize: em(size(4)),
		},
		'& > picture': {
			maxHeight: experienceImageSize,
			marginRight: em(size(3)),
			width: experienceImageSize,
			order: -1,
		},
		'& b': {
			width: percent(100),
			marginBottom: em(size(1)),
		},
		'& details > ol span': {
			color: rgba(0, 0, 0, 0.5).toString(),
			fontSize: em(size(3)),
		},
		'& span > time': {
			color: color('#000').toHexString(),
			fontSize: em(size(6)),
		},
	},
});

const academicList = style({
	...fullList,
	gridRowStart: 2,
});

const academicItem = style({
	...listItem,
	opacity: 1,
	transition: '.4s ease-in transform, .5s ease-out opacity',
	$nest: {
		...listItem.$nest,
		'& > span': {
			color: rgba(0, 0, 0, 0.5).toString(),
			alignSelf: 'flex-end',
			fontSize: em(size(3)),
		},
		'&:not(.open)': {
			minHeight: em(litsItemHeight),
		},
		'& span > time': {
			color: color('#000').toHexString(),
			fontSize: em(size(6)),
		},
	}
});

const seeMoreButton = style({
	backgroundColor: 'transparent',
	width: percent(100),
	cursor: 'pointer',
	border: 'none',
});

const contentArticles = style();

const articlesList = style({
	display: 'flex',
	overflowX: 'auto',
	justifyContent: 'space-between',
}, mobileMD({
	flexWrap: 'wrap',
	justifyContent: 'center',
	marginBottom: em(size(12)),
}));

const articleImageSize = em(size(65));

const articlesItem = style({
	width: articleImageSize,
	marginRight: em(size(4)),
	$nest: {
		'& > a': {
			textDecoration: 'none',
		},
		'& > a > article': {
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			display: 'flex',
		},
		'& img': {
			height: articleImageSize,
			width: percent(100),
		},
		'& figcaption': {
			fontSize: em(size(4)),
		},
		'& i, & time': {
			fontSize: em(size(3)),
		},
	},
});

const styles = {
	body: style({
		display: 'grid',
		gridTemplateRows: '25px min-content 20px auto',
		gridTemplateColumns: 'auto minmax(680px, 720px) auto',
	}, mobileMD({
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
	contentExperiences,
	experiencesList,
	experiencesItem,
	contentAcademic,
	academicList,
	academicItem,
	seeMoreButton,
	contentArticles,
	articlesList,
	articlesItem,
	experienceImageSize,
	headerContactsSize,
	headerPhotoSizeDesktop,
	headerPhotoSizeMobile,
	contentSkillsGraphSize,
	articleImageSize,
};

export default styles;
