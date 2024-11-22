/** @type {import('tailwindcss').Config} */
export default {
	content: [
	'./*.html',
	'./src/**/*.html',
	'./src/**/*.vue',
	],
	theme: {
		extend: {
			colors: {
				'primary-red': '#ED4C67',
				'primary-blue': '#5A95C3',
				'primary-red-hover': '#f78d9f',
				'primary-blue-hover': '#196eb0',
			},
			transitionProperty: {
				'fade': 'opacity',
			},
			transitionDuration: {
				fade: '1000ms',
			},
			transitionTimingFunction: {
				fade: 'ease-out',
			},
			opacity: {
				'fade-enter': '0',
				'fade-leave-to': '0',
			}
		},
	},
	variants: {
		extend: {
			opacity: ['fade-enter', 'fade-leave-to'],
		}
	},
	plugins: [],
}

