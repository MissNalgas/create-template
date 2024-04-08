/** @type {import('tailwindcss').Config} */
import { colors, spacing } from './src/infrastructure/theme';
module.exports = {
	content: ['./src/**/*.{jsx,js,ts,tsx}'],
	theme: {
		extend: {
			colors: colors,
			spacing: spacing,
		},
	},
	plugins: [],
};
