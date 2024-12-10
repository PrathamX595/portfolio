/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        		pixel: ['Pixelated Elegance', 'sans-serif'],
        		gothic: ['Gothic A1', 'sans-serif'],
        		iso: ['ISOCPEUR', 'sans-serif'],
      		},
			colors: {
				'bg-default': '#1A1A1A',
				'textYellow': '#8CA137',
				'textWhite': '#969F91',
			}
		},
	},
	plugins: [],
}
