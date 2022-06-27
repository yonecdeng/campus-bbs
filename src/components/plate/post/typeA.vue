<template>
	<div class="postA" :style="beforeColor">
		<div class="post-title">
			<div class="title">{{ postName }}</div>
			<div class="author">{{ postAuthor }}</div>
			<div v-if="isSticky" class="tag sticky">置顶</div>
			<div v-if="isPick" class="tag pick">精华</div>
			<div class="more">
				<router-link :to="postDetailPath">查看更多</router-link>
			</div>
		</div>
		<div class="post-content">
			{{ postContent }}
		</div>
		<div class="post-message">
			<div class="update-time">更新时间 {{ postUpdateTime }}</div>
			<div class="comment">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 19C14.9707 19 19 14.9707 19 9.99999C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 9.99999C1 11.6389 1.4383 13.177 2.2042 14.5L1.45 18.55L5.5 17.7958C6.86759 18.5869 8.42006 19.0024 10 19V19Z"
						stroke="#1F1F1F"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				&nbsp;
				{{ commentNumber }}
			</div>
			<div class="watcher">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z"
						stroke="#1F1F1F"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M21 12C19.111 14.991 15.718 18 12 18C8.282 18 4.889 14.991 3 12C5.299 9.158 7.992 6 12 6C16.008 6 18.701 9.158 21 12Z"
						stroke="#1F1F1F"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				&nbsp;
				{{ watcherNumber }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps(['postData'])
const { postId, postName, postAuthor, postContent, postUpdateTime, commentNumber, watcherNumber, isSticky, isPick } =
	toRefs(props.postData)

const postDetailPath = `/post/${postId.value}`

const beforeColor = computed(() => {
	if (isSticky.value) return { '--beforeColor': '#9747FF' }
	return { '--beforeColor': '#ffffff' }
})
// let postName: string = '帖子A'
// let postAuthor: string = '发帖人ID'
// let content: string = `楼主发言
// 正文内容年卡哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的`
// let postUpdateTime = ref<string>('2022-06-17 19:40')
// let commentNumber = ref<number>(96)
// let watcherNumber = ref<number>(150)
</script>

<style lang="scss" scoped>
.postA {
	box-sizing: border-box;
	width: 100%;
	min-width: 360px;
	max-width: 480px;
	height: 280px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	box-shadow: 8px 8px 8px rgba(239, 239, 239, 0.25), 4px 4px 4px rgba(172, 172, 172, 0.25);

	display: flex;
	flex-direction: column;

	&::before {
		content: '';
		display: block;
		width: 100%;
		height: 6px;
		background-color: var(--beforeColor);
	}

	.post-title {
		box-sizing: border-box;
		height: 80px;
		border-bottom: 1px solid #eeeeee;
		position: relative;

		.title {
			position: absolute;
			left: 20px;
			right: 180px;
			top: 16px;
			height: 24px;
			line-height: 24px;

			font-family: 'Helvetica';
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			color: #1f1f1f;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.author {
			position: absolute;
			left: 20px;
			right: 200px;
			bottom: 16px;
			height: 14px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 14px;
			color: #b1b1b1;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.tag {
			position: absolute;
			width: 60px;
			height: 24px;
			background: #9747ff;
			border-radius: 12px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			color: #ffffff;
			line-height: 24px;
			text-align: center;
			cursor: default;
		}

		.sticky {
			right: 90px;
			top: 16px;
		}

		.pick {
			right: 24px;
			top: 16px;
		}

		.more {
			position: absolute;
			right: 24px;
			bottom: 16px;
			width: 56px;

			a {
				display: block;
				height: 14px;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				line-height: 14px;
				color: #1f1f1f;

				text-decoration: none;

				&::before {
					position: absolute;
					left: 58px;
					top: 5.59px;
					content: '';
					display: block;
					width: 6px;
					height: 2px;
					background-color: #1f1f1f;
					transform: rotateZ(45deg);
				}

				&::after {
					position: absolute;
					left: 58px;
					bottom: 3.59px;
					content: '';
					display: block;
					width: 6px;
					height: 2px;
					background-color: #1f1f1f;
					transform: rotateZ(-45deg);
				}
			}
		}
	}

	.post-content {
		flex: 1;
		padding: 14px 24px 10px 20px;

		font-family: 'Microsoft YaHei';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		letter-spacing: 0.02em;
		color: #b1b1b1;

		white-space: pre-wrap;
	}

	.post-message {
		height: 30px;
		margin-bottom: 25px;
		display: flex;
		align-items: center;
		position: relative;

		.update-time {
			position: absolute;
			left: 20px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 14px;
			color: #b1b1b1;
		}

		.comment {
			position: absolute;
			right: 90px;
			width: 65px;
			height: 24px;
			line-height: 24px;
			display: flex;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			color: #1f1f1f;
		}

		.watcher {
			position: absolute;
			right: 24px;
			width: 65px;
			height: 24px;
			line-height: 24px;
			display: flex;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			color: #1f1f1f;
		}
	}
}
</style>
