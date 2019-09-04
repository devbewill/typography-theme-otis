// @flow
import type { OptionsType } from 'Types';
import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const theme: OptionsType = {
	title: 'Otis',
	baseFontSize: '18px',
	baseLineHeight: 1.55,
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
	overrideStyles: ({ scale, rhythm }) => ({
		html: {
			'-webkit-font-smoothing': 'antialiased'
		},
		body: {
			letterSpacing: '.03em'
		},
		a: {
			color: '#aa04dc'
		},
		'a:hover': {
			color: '#000'
		},
		blockquote: {
			...scale(1 / 5),
			color: gray(40),
			paddingLeft: rhythm(13 / 16),
			marginLeft: rhythm(-1),
			borderLeft: `${rhythm(3 / 16)} solid ${gray(13)}`
		},
		[MOBILE_MEDIA_QUERY]: {
			blockquote: {
				marginLeft: rhythm(-3 / 4),
				paddingLeft: rhythm(9 / 16),
				marginRight: 0
			}
		}
	})
};

export default theme;
