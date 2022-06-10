<script setup lang="ts">
import * as echarts from 'echarts'
import options from './options'

nextTick(() => {
	const dom = document.getElementById('barChart')
	const myChart = dom && echarts.init(dom)
	// 基于准备好的dom，初始化echarts实例
	// 绘制图表
	myChart?.setOption(options)
})
</script>

<template>
	<div id="barChart" style="height: 600px"></div>
</template>

<style lang="scss" scoped></style>
