const {
	trueGray: darkTheme,
	trueGray: lightTheme,
	emerald: emeralTheme,
	amber: amberTheme,
} = require("tailwindcss/colors");

const themeConfig = {
	themes: [
		{
			name: "base",
			selectors: [":root"],
			theme: {
				backgroundColor: {
					primary: lightTheme[300],
					secondary: lightTheme[400],
					tertiary: lightTheme[700],
				},
				textColor: {
					primary: lightTheme[900],
					secondary: lightTheme[700],
					tertiary: lightTheme[50],
				},
				colors: {
					lighter: lightTheme[100],
					light: lightTheme[300],
					medium: lightTheme[400],
					dark: lightTheme[700],
					darker: lightTheme[900],
				},
				borderRadius: {
					custom: "9999px",
				},
				borderWidth: {
					button: "2px",
				},
				borderColor: {
					button: darkTheme[600],
				},
			},
		},
		{
			name: "dark",
			selectors: [".dark"],
			theme: {
				backgroundColor: {
					primary: darkTheme[700],
					secondary: darkTheme[500],
					tertiary: darkTheme[300],
				},
				textColor: {
					primary: darkTheme[50],
					secondary: darkTheme[700],
					tertiary: darkTheme[900],
				},
				colors: {
					lighter: darkTheme[900],
					light: darkTheme[700],
					medium: darkTheme[500],
					dark: darkTheme[300],
					darker: darkTheme[100],
				},
				borderRadius: {
					custom: "9999px",
				},
				borderWidth: {
					button: "2px",
				},
				borderColor: {
					button: darkTheme[400],
				},
			},
		},
		{
			name: "emerald",
			selectors: [".emerald"],
			theme: {
				backgroundColor: {
					primary: emeralTheme[500],
					secondary: emeralTheme[600],
					tertiary: emeralTheme[700],
				},
				textColor: {
					primary: emeralTheme[100],
					secondary: emeralTheme[300],
					tertiary: emeralTheme[50],
				},
				colors: {
					lighter: emeralTheme[100],
					light: emeralTheme[300],
					medium: emeralTheme[500],
					dark: emeralTheme[700],
					darker: emeralTheme[900],
				},
				borderRadius: {
					custom: "0.5rem",
				},
				borderWidth: {
					button: "2px",
				},
				borderColor: {
					button: emeralTheme[800],
				},
			},
		},
		{
			name: "amber",
			selectors: [".amber"],
			theme: {
				backgroundColor: {
					primary: amberTheme[500],
					secondary: amberTheme[600],
					tertiary: amberTheme[700],
				},
				textColor: {
					primary: amberTheme[100],
					secondary: amberTheme[300],
					tertiary: amberTheme[50],
				},
				colors: {
					lighter: amberTheme[100],
					light: amberTheme[300],
					medium: amberTheme[500],
					dark: amberTheme[700],
					darker: amberTheme[900],
				},
				borderRadius: {
					custom: "0.5rem",
				},
				borderWidth: {
					button: "2px",
				},
				borderColor: {
					button: amberTheme[800],
				},
			},
		},
	],
};

module.exports = themeConfig;
