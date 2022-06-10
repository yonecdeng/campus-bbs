<script setup lang="ts">
import * as icon from '@icon-park/vue-next'
import { useDebounceFn } from '@vueuse/core'
import { Ref } from 'vue'
import { useAppStore } from '@/store'
import asyncPool from '@/utils/scheduler'
import lazyLoad from '@/utils/lazy-load'

const test = ref('test')
console.log(test.value)
const appStore = useAppStore()
appStore.initTheme() // 初始化主题
const bl1 = ref()
const bl2 = ref()
const bl3 = ref()
const bl4 = ref()
const bl5 = ref()
const bl6 = ref()
const bl7 = ref()
const bl8 = ref()
const bl9 = ref()
const bl10 = ref()
const bl11 = ref()
const bl12 = ref()
const bl13 = ref()
const bl14 = ref()
const bl15 = ref()

const intersectingChartsArr: Ref<any>[] = []
const debounceFn = () => {
	/** 异步数控制  */
	asyncPool(
		5,
		intersectingChartsArr,
		item =>
			new Promise((resolve, reject) => {
				try {
					resolve(item.value.initChart())
				} catch (error) {
					reject(error)
				}
			}),
	)
}
const debounceAsyncPool = useDebounceFn(debounceFn, 1000) // 传个函数进去，但不调用
const lazyLoadCallback = (item: Ref<any>) => {
	intersectingChartsArr.push(item)
	debounceAsyncPool() // 这里才调用那个传进来的函数
}
onMounted(() => {
	/** 懒加载 */
	lazyLoad([bl1, bl2, bl3, bl4, bl5, bl6, bl7, bl8, bl9, bl10, bl11, bl12, bl13, bl14, bl15], lazyLoadCallback)
})
</script>

<template>
	<!--测试icon能否加载、动画能够播放、切换主题能否使用-->
	<Menu></Menu>
	<component :is="icon['DashboardOne']"></component>
	<component :is="icon['Home']"></component>
	<button @click="appStore.toggleTheme()">切换主题</button>
	<ListAnimateList tag="ul" :duration="5" :delay="2">
		<li v-for="(item, index) of [1, 2, 1, 2, 1, 2]" :key="index" :data-index="index">{{ item }}</li>
	</ListAnimateList>
	<router-view></router-view>

	<EchartsBarChart></EchartsBarChart>
	<EchartsLineChart></EchartsLineChart>
	<EchartsBarLineChart ref="bl1" class="blChart" dom-id="bl1"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl2" class="blChart" dom-id="bl2"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl3" class="blChart" dom-id="bl3"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl4" class="blChart" dom-id="bl4"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl5" class="blChart" dom-id="bl5"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl6" class="blChart" dom-id="bl6"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl7" class="blChart" dom-id="bl7"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl8" class="blChart" dom-id="bl8"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl9" class="blChart" dom-id="bl9"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl10" class="blChart" dom-id="bl10"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl11" class="blChart" dom-id="bl11"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl12" class="blChart" dom-id="bl12"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl13" class="blChart" dom-id="bl13"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl14" class="blChart" dom-id="bl14"></EchartsBarLineChart>
	<EchartsBarLineChart ref="bl15" class="blChart" dom-id="bl15"></EchartsBarLineChart>
</template>

<style lang="scss" scoped></style>
