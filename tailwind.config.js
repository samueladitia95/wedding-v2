/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'ro-black': '#1D1D1B',
				'ro-creme': '#B7B0A8',
				'ro-light-creme': '#F7F4EF',
				'ro-white': '#FFFFFF',
				'ro-brown': '#4C4A44',
				'ro-error': '#D10000'
			}
		}
	},
	plugins: []
};
