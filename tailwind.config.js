/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.js',
		'./resources/js/**/*.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Instrument Sans',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
			},
		},
	},
	plugins: [],
};
