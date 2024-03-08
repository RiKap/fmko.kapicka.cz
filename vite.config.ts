import { resolve } from 'path';
import { defineConfig } from 'vite';
import hugoPlugin from 'vite-hugo-plugin';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

const appDir = __dirname;
const hugoOutDir = resolve(appDir, 'public');
const hugoConfigFileName = 'config.toml';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo: { name: any }) => {
					let extType = assetInfo.name!.split('.').at(1);

					if (/png|jpe?g|webp|gif/i.test(extType)) {
						extType = 'img';
					}

					return `assets/${extType}/main-[hash][extname]`;
				},
				chunkFileNames: 'assets/js/chunk-[hash].js',
				entryFileNames: 'assets/js/main-[hash].js',
			},
		},
	},
	plugins: [
		hugoPlugin({
			appDir,
			hugoOutDir,
			hugoConfigFileName,
		}),
		ViteMinifyPlugin({
			minifyURLs: false,
			removeAttributeQuotes: false,
		}),
	],
});
