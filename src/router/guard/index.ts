import type { Router } from 'vue-router'
import { emitRouteChange } from '@/utils/route-listener'

function setupPageGuard(router: Router) {
	router.beforeEach(async to => {
		emitRouteChange(to) // 触发route change
	})
}

/** 暴露出这个函数在router目录的index.ts文件中创建守卫 */
export default function createRouteGuard(router: Router) {
	setupPageGuard(router)
}
