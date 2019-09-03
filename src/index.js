import gray from 'gray-percentage';
import type { OptionsType } from 'Types';
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';

const theme: OptionsType = {
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
		a: {
			color: '#8b0bd6',
			textDecoration: 'none'
		},
		'a:hover,a:active': {
			textDecoration: 'underline'
		},
		p: {
			marginBottom: rhythm(0.8),
			marginTop: rhythm(0.8)
		},
		blockquote: {
			...scale(1 / 5),
			color: gray(41),
			fontStyle: 'italic',
			paddingLeft: rhythm(13 / 16),
			marginLeft: 0,
			borderLeft: `${rhythm(3 / 16)} solid ${gray(80)}`
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
		[TABLET_MEDIA_QUERY]: {
			h1: {
				...scale(5 / 5)
			}
		},
		'h1,h2,h3,h4,h5,h6': {
			marginTop: rhythm(2)
		},
		h1: {
			...scale(6 / 5),
			letterSpacing: '1px'
		},
		h6: {
			fontStyle: 'italic'
		}
	})
};

export default theme;
