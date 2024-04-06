/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					purple: '#5E50A1',
					yellow: '#FBB017',
				},
				'yankees-blue': '#1F2A36',
				'davys-gray': '#46505C',
				'quick-silver': '#9EA0A5',
				'azureish-white': '#E2E5ED',
				cultured: '#F6F7F8',
				'roman-silver': '#858D96',
			},
			fontFamily: {
				'open-sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				login: "url('/src/assets/bg-login.png')",
			},
		},
	},
	plugins: [],
};
