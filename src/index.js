import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const theme = {
	title: 'Otis',
	baseFontSize: '18px',
	baseLineHeight: 1.55,
	scaleRatio: 2.5,
	googleFonts: [
		{
			name: 'Fira Sans',
			styles: [ '700', '900' ]
		},
		{
			name: 'Rubik',
			styles: [ '300', '400', '700' ]
		}
	],
	headerFontFamily: [ 'Fira Sans', 'sans-serif' ],
	bodyFontFamily: [ 'Rubik', 'sans-serif' ],
	bodyColor: 'hsla(0,0%,0%,0.9)',
	headerWeight: 900,
	bodyWeight: 300,
	boldWeight: 700,
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
		h1: {
			fontSize: rhythm(1.5),
			marginTop: rhythm(1),
			marginBottom: rhythm(1)
		},
		h3: {
			fontSize: rhythm(0.75)
		},
		'h2,h3,h4,h5,h6': {
			marginTop: rhythm(2)
		},
		a: {
			color: '#aa04dc',
			textDecoration: 'none'
		},
		'a:hover,a:active': {
			opacity: 0.5,
			transition: 'opacity .15s ease-in-out'
		},
		time: {
			color: '#aa04dc',
			fontWeight: 400
		},
		blockquote: {
			...scale(1 / 5),
			color: gray(41),
			fontStyle: 'italic',
			paddingLeft: rhythm(13 / 16),
			marginLeft: rhythm(-1),
			borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
		},
		'blockquote > :last-child': {
			marginBottom: 0
		},
		'blockquote cite': {
			...adjustFontSizeTo(options.baseFontSize),
			color: options.bodyColor,
			fontWeight: options.bodyWeight
		},
		'blockquote cite:before': {
			content: '"— "'
		},
		ul: {
			listStyle: 'disc'
		},
		'ul,ol': {
			marginLeft: 0
		},
		[MOBILE_MEDIA_QUERY]: {
			'ul,ol': {
				marginLeft: rhythm(1)
			},
			blockquote: {
				marginLeft: rhythm(-3 / 4),
				marginRight: 0,
				paddingLeft: rhythm(9 / 16)
			}
		},
		'mark,ins': {
			background: '#007acc',
			color: 'white',
			padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
			textDecoration: 'none'
		},
		code: {
			backgroundColor: '#f4f6f9',
			padding: '2px 5px',
			borderRadius: '2px'
		},
		'.gatsby-highlight > .language-text': {
			backgroundColor: '#f4f6f9',
			padding: '2px 5px',
			borderRadius: '2px'
		},
		'.gatsby-highlight code': {
			background: 'none',
			padding: 0
		}
	})
};

export default theme;
