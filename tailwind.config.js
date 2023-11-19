/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import form from '@tailwindcss/forms';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [daisyui, form],
	daisyui: {
		themes: [
			'light',
			'dark',
			'corporate',
			'forest',
			'lofi',
			'black',
			'business',
			'acid',
			'lemonade',
			'winter'
		]
	}
};
