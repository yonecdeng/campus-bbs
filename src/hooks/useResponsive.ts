import { useDebounceFn } from '@vueuse/core'
import { addEventListen, removeEventListen } from '@/utils/event'

export default function useResponsive(handler: () => void, immediate?: boolean) {
	const debounceFn = useDebounceFn(handler, 1000)
	onMounted(() => {
		if (immediate) debounceFn()
	})
	onBeforeMount(() => {
		addEventListen(window, 'resize', debounceFn)
	})
	onBeforeUnmount(() => {
		removeEventListen(window, 'resize', debounceFn)
	})
}
