<template>
	<div class="postB" :style="beforeColor">
		<div v-if="isSticky" class="tag sticky">置顶</div>
		<div v-else class="tag">{{ props.index + 1 }}</div>
		<div class="content-box">
			<div class="main-content">
				<router-link class="title" :to="postDetailPath">{{ postName }}</router-link>
				<div class="author">{{ postAuthor }}</div>
			</div>
			<div class="message">
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
				<div class="update-time">更新时间 {{ postUpdateTime }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps(['postData', 'index'])
const { postId, postName, postAuthor, postUpdateTime, commentNumber, watcherNumber, isSticky } = toRefs(props.postData)

// let postName: string = '帖子A'
// let postAuthor: string = '发帖人ID'
// let postUpdateTime = ref<string>('2022-06-17 19:40')
// let commentNumber = ref<number>(96)
// let watcherNumber = ref<number>(150)
// let isSticky = ref<boolean>(true)

const postDetailPath = `/post/${postId.value}`

const beforeColor = computed(() => {
	if (isSticky.value) return { '--beforeColor': '#9747FF' }
	return { '--beforeColor': '#ffffff' }
})
</script>

<style lang="scss" scoped>
.postB {
	box-sizing: border-box;
	height: 48px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		content: '';
		display: block;
		width: 4px;
		height: 100%;
		background-color: var(--beforeColor);
	}

	.tag {
		position: absolute;
		left: 39px;
		top: 12px;
		width: 60px;
		height: 24px;
		border-radius: 12px;
		font-family: 'Microsoft YaHei';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		color: #b1b1b1;
		line-height: 24px;
		text-align: center;
		cursor: default;
	}

	.sticky {
		background: #9747ff;
		color: #ffffff;
	}

	.content-box {
		position: absolute;
		left: 140px;
		right: 43px;
		height: 100%;
		display: flex;
		justify-content: space-between;

		.main-content {
			flex: 1;
			min-width: 150px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			.title {
				display: block;
				position: absolute;
				left: 0;
				right: 100px;
				height: 20px;
				line-height: 20px;

				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 500;
				font-size: 20px;
				color: #1f1f1f;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				text-decoration: none;
			}

			.author {
				position: absolute;
				right: 0;
				width: 100px;
				height: 14px;
				line-height: 14px;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 12px;
				color: #b1b1b1;
			}
		}

		.message {
			display: flex;
			align-items: center;
			.comment {
				width: 70px;
				height: 24px;
				line-height: 24px;
				margin-right: 5px;
				display: flex;
				justify-content: flex-start;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				color: #1f1f1f;
			}

			.watcher {
				width: 70px;
				height: 24px;
				line-height: 24px;
				margin-right: 5px;
				display: flex;
				justify-content: flex-start;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				color: #1f1f1f;
			}

			.update-time {
				width: 180px;
				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				line-height: 24px;
				color: #b1b1b1;
			}
		}
	}
}
</style>
