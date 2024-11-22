import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	css: {
		postcss: {
			plugins: [
				tailwindcss(),
				autoprefixer(),
			],
		}
	},
	server: {
		port: 8000,
		strictPort: true,
		host: '0.0.0.0',
		origin: 'http://0.0.0.0:8000',
	},
	preview: {
		port: 8000,
		strictPort: true,
	}
})
