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
				"ro-nav": "rgba(29, 29, 27, 0.23)"
			},
			container: {
				center: true,
				padding: "2rem"
			},
			fontFamily: {
				juana: ["Juana", ...defaultTheme.fontFamily.sans],
				snell: ["Snell Roundhand", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
