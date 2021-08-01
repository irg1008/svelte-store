const colors = require("tailwindcss/colors");
const themes = require("./theme.config.cjs");
const themeSwapper = require("tailwindcss-theme-swapper");

const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			gray: colors.trueGray,
		},
	},
	variants: {},
	plugins: [themeSwapper(themes)],
};

module.exports = config;
