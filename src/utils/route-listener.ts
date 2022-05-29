/**
 * Listening to routes alone would waste rendering performance. Use the publish-subscribe model for distribution management
 * 让menu和tabbar组件用watch去单独监听路由会浪费渲染性能。使用发布订阅模式去进行分发管理。
 */
import mitt, { Handler } from 'mitt'
import type { RouteLocationNormalized } from 'vue-router'

const emitter = mitt()

const key = Symbol('ROUTE_CHANGE')

let latestRoute: RouteLocationNormalized

export function emitRouteChange(to: RouteLocationNormalized) {
	emitter.emit(key, to) // 触发事件
	latestRoute = to
}

// eslint-disable-next-line no-unused-vars
export function registerRouteChangeEvent(handler: (route: RouteLocationNormalized) => void, immediate = true) {
	emitter.on(key, handler as Handler) // 注册事件：当emitter.emit(key)时就会执行这个事件
	if (immediate && latestRoute) {
		handler(latestRoute)
	}
}

export function removeRouteListener() {
	emitter.off(key)
}
