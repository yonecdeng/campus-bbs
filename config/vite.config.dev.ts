import { ConfigEnv, UserConfigExport, mergeConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import baseConig from './vite.config.base'

export default ({ command }: ConfigEnv): UserConfigExport =>
	mergeConfig(
		{
			mode: 'development',
			server: {
				open: true,
				fs: {
					strict: true,
				},
			},
			plugins: [
				viteMockServe({
					// default
					mockPath: 'mock',
					localEnabled: command === 'serve',
				}),
				Components({
					// 自动加载的组件目录，默认值为 ['src/components']
					dirs: ['src/components'],
					// 组件名称包含目录，防止同名组件冲突
					directoryAsNamespace: true,
					// 指定类型声明文件，为true时在项目根目录创建
					dts: 'src/types/components.d.ts',
				}),
				AutoImport({
					imports: ['vue', 'vue-router'], // 自动引入vue和vue-router的api
					// 为true时在项目根目录自动创建
					dts: 'src/types/auto-imports.d.ts',
				}),
			],
		},
		baseConig,
	)
