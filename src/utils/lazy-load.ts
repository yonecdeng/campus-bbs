import { MaybeElement, MaybeElementRef, useIntersectionObserver } from '@vueuse/core'

const lazyLoad = (arr: MaybeElementRef<MaybeElement>[], callback: (item: MaybeElementRef<MaybeElement>) => void) => {
	/** 懒加载 */
	arr.forEach(item => {
		const { stop } = useIntersectionObserver(
			// 监听目标元素
			item,
			([{ isIntersecting }], observerElement) => {
				// isIntersecting: 当前监听的元素是否成功进入到视口区域 如果进来了就是true 否则就是false
				// observerElement 被观察的dom
				// 有了一个判断是否进入视口区域的条件 如果是true  代表进入了视口区域 发起请求
				if (isIntersecting) {
					// 可能随着业务的不同 调用的方法也不同
					callback(item)
					// 发送请求之后  立刻停止监听
					stop()
				}
				// 监听处理不是只一次进行的 每次进入移除视口都会再次执行回调  所以需要手动关闭
			},
			// 进入可视区域的比例是多少才执行回调 0-1 值越大 代表需要进入的面积越大
			{ threshold: 0 },
		)
	})
}
export default lazyLoad
