/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['.html', './pages/**/*.html'],
	theme: {
		extend: {
			colors: {
				explorer: {
					yellow: '#DCCA87',
				},
			},
		},
		fontFamily: {
			'open-sans': 'Open Sans, sans-serif',
			cormorant: 'Cormorant Upright, serif',
			poppins: 'Poppins, sans-serif',
		},
	},
	plugins: [],
};
