import { mergeConfig } from 'vite'
import legacyPlugin from '@vitejs/plugin-legacy'
import baseConig from './vite.config.base'
import configCompressPlugin from './productionPlugins/compress'
import configVisualizerPlugin from './productionPlugins/visualizer'

export default mergeConfig(
	{
		mode: 'production',
		plugins: [
			configCompressPlugin('gzip'),
			configVisualizerPlugin(),
			legacyPlugin({
				targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
				additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
			}),
		],
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						// chart: ['echarts', 'vue-echarts'],
						// vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
					},
				},
			},
			chunkSizeWarningLimit: 2000,
			cssTarget: ['chrome52', 'ie11'],
		},
	},
	baseConig,
)
