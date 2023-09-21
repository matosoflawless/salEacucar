import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src/assets") },
		],
	},
	css: {
		devSourcemap: true,
	},
	envDir: './envDir',
	plugins: [react(), eslint()],
})
