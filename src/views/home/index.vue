<script setup lang="ts">
// 测试mock和axios能否使用
import userApis from '@/apis/user'

const router = useRouter()
const res = await userApis.info()
console.log(res)
const toggleRouter = () => {
	router.push({ name: 'todos-user' })
}
</script>

<template>
	<div>
		<!--测试路由是否运作 且 过渡动画是否播放-->
		todos/home
		<button @click="toggleRouter">切换路由</button>
	</div>
</template>

<style lang="scss" scoped></style>
