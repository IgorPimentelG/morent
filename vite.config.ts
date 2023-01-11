import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	mode: 'development',
	resolve: {
		alias: {
			'@data': path.resolve(__dirname, './src/data'),
			'@domain': path.resolve(__dirname, './src/domain'),
			'@infra': path.resolve(__dirname, './src/infra'),
			'@main': path.resolve(__dirname, './src/main'),
			'@presentation': path.resolve(__dirname, './src/presentation'),
		}
	}
});
