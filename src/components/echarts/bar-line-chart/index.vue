<script setup lang="ts">
import * as echarts from 'echarts'
import options from './options'
import useResponsive from '@/hooks/useResponsive'

const test = ref<string>('aa')
let chart: echarts.ECharts | null
const props = defineProps<{
	domId: string
}>()

useResponsive(() => {
	console.log('resize')
	chart?.resize()
}, false)
const initChart = () => {
	return new Promise(resolve => {
		resolve(
			nextTick(() => {
				const dom = document.getElementById(props.domId)
				// 加个loading效果
				chart = dom && echarts.init(dom)
				// 基于准备好的dom，初始化echarts实例
				// 绘制图表
				chart?.setOption(options)
				// 取消loading
			}),
		)
	})
}
defineExpose({
	test,
	initChart,
})
</script>

<template>
	<div :id="props.domId" style="width: 100%; height: 300px"></div>
</template>

<style lang="scss" scoped></style>
