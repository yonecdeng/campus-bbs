import type { RouteRecordRaw } from 'vue-router'

/* 加载Todos的子路由 */
const todosModules = import.meta.globEager('./modules/*.ts')
const todosRoutes: RouteRecordRaw[] = []
Object.keys(todosModules).forEach(key => {
	const defaultModule = todosModules[key].default
	if (!defaultModule) return
	const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
	todosRoutes.push(...moduleList)
})

export default todosRoutes
