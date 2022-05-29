<script setup lang="ts"></script>

<template>
	todos-layout
	<Suspense>
		<router-view v-slot="{ Component }">
			<!--过渡组件添加动画效果-->
			<Transition
				appear
				mode="out-in"
				enter-active-class="animate__animated animate__bounceIn"
				leave-active-class="animate__animated animate__bounceOut"
			>
				<component :is="Component"></component>
			</Transition>
		</router-view>
	</Suspense>
</template>

<style lang="scss" scoped></style>
