const colors = require("tailwindcss/colors");
const themes = require("./theme.config.cjs");
const themeSwapper = require("tailwindcss-theme-swapper");
const tailwindForms = require("@tailwindcss/forms");

const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
			},
		},
	},
	variants: {},
	plugins: [themeSwapper(themes), tailwindForms],
};

module.exports = config;
