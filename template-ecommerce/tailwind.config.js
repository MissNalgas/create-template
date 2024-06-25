/** @type {import('tailwindcss').Config} */
import { spacing } from './src/infrastructure/theme';
module.exports = {
	content: ['./src/**/*.{jsx,js,ts,tsx}'],
	theme: {
		extend: {
			spacing: spacing,
		},
	},
	plugins: [],
};
