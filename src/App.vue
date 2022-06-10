<script setup lang="ts">
import * as icon from '@icon-park/vue-next'
import { useDebounceFn } from '@vueuse/core'
import { Ref } from 'vue'
import { useAppStore } from '@/store'

const test = ref('test')
console.log(test.value)
const appStore = useAppStore()
appStore.initTheme() // 初始化主题
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
</template>

<style lang="scss" scoped></style>
