<template>
	<div class="index">
		<div class="container">
			<sideBar />
			<router-view class="index-view"></router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import sideBar from '@/views/home/sideBar.vue'
</script>

<style lang="scss" scoped>
.index {
	.container {
		height: 100%;
		display: flex;

		.index-view {
			flex: 1;
		}
	}
}
</style>
