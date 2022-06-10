<script setup lang="ts">
import * as echarts from 'echarts'
import lineChartOptions from './options'

nextTick(() => {
	const dom = document.getElementById('lineChart')
	const myChart = dom && echarts.init(dom)
	// 基于准备好的dom，初始化echarts实例
	// 绘制图表
	myChart?.setOption(lineChartOptions)
})
</script>

<template>
	<div>
		<div id="lineChart" style="height: 300px"></div>
	</div>
</template>

<style lang="scss" scoped></style>
