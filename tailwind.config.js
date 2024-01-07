/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				primaryLight: 'var(--color-primary-light)',
				primaryDark: 'var(--color-primary-dark)',
				secondary: 'var(--color-secondary)'
			}
		}
	},
	plugins: []
};
