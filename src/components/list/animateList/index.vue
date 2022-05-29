<script setup lang="ts">
import gsap from 'gsap'
import { RendererElement } from 'vue'

interface IAnimateLinkProps {
	tag?: string
	duration?: number
	delay?: number
}
const props = withDefaults(defineProps<IAnimateLinkProps>(), {
	tag: '',
	duration: 0.5,
	delay: 0.2,
})
const beforeEnter = (el: RendererElement) => {
	gsap.set(el, {
		opacity: 0,
	})
}

const enter = (el: RendererElement) => {
	gsap.to(el, {
		// to表示设置动画
		opacity: 1,
		duration: props.duration,
		delay: el.dataset.index * props.delay,
	})
}
</script>

<template>
	<div class="animateList-container">
		<TransitionGroup :tag="props.tag" appear name="list" @before-enter="beforeEnter" @enter="enter">
			<slot></slot>
		</TransitionGroup>
	</div>
</template>

<style lang="scss" scoped>
.animateList-container {
	position: relative;
}
</style>
