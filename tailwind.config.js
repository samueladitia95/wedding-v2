import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"ro-black": "#1D1D1B",
				"ro-creme": "#B7B0A8",
				"ro-light-creme": "#F7F4EF",
				"ro-white": "#FFFFFF",
				"ro-brown": "#4C4A44",
				"ro-error": "#D10000",
				"ro-nav": "rgba(29, 29, 27, 0.23)",
				"ro-brown-light": "#A99E92"
			},
			container: {
				center: true,
				padding: "2rem"
			},
			fontFamily: {
				mirage: ["Made Mirage", ...defaultTheme.fontFamily.sans],
				island: ["Island Script Opti", ...defaultTheme.fontFamily.sans],
				alex: ["Alex Brush", ...defaultTheme.fontFamily.sans],
				oakes: ["Oakes Grotesk", ...defaultTheme.fontFamily.sans]
			},
			zIndex: {
				full: 100
			}
		}
	},
	plugins: []
};
