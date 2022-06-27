<template>
	<div class="postC">
		<div class="user-box">
			<div class="user-image"></div>
			<div class="user-id">{{ floorAuthor }}</div>
		</div>
		<div class="content">
			<div class="message">
				<div class="item">{{ floorId }}楼</div>
				<div v-if="isPostAuthor" class="item">楼主</div>
				<div class="item">{{ floorUpdateTime }}</div>
			</div>
			<div class="main-content">
				{{ floorContent }}
			</div>
			<div class="infoBar">
				<div class="item">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 19C14.9707 19 19 14.9707 19 9.99999C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 9.99999C1 11.6389 1.4383 13.177 2.2042 14.5L1.45 18.55L5.5 17.7958C6.86759 18.5869 8.42006 19.0024 10 19V19Z"
							stroke="#1F1F1F"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					回复
				</div>
				<div class="item" @click.once="addLike">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.972 20.2808H4.6C4.44087 20.2808 4.28826 20.2176 4.17574 20.105C4.06321 19.9925 4 19.8399 4 19.6808V9.88077C4 9.72164 4.06321 9.56903 4.17574 9.4565C4.28826 9.34398 4.44087 9.28077 4.6 9.28077H7.368C7.71337 9.28077 8.05286 9.19134 8.3534 9.02118C8.65395 8.85101 8.90531 8.60592 9.083 8.30977L11.793 3.79277C11.9974 3.45162 12.3194 3.1969 12.6984 3.07652C13.0774 2.95614 13.4874 2.97839 13.8512 3.13908C14.2149 3.29978 14.5075 3.58785 14.6737 3.94911C14.84 4.31037 14.8685 4.71993 14.754 5.10077L13.732 8.50877C13.7052 8.59828 13.6997 8.6928 13.7159 8.78482C13.7321 8.87683 13.7696 8.96379 13.8253 9.03877C13.8811 9.11375 13.9536 9.17467 14.037 9.21668C14.1205 9.2587 14.2126 9.28064 14.306 9.28077H18.881C19.1885 9.28071 19.492 9.35157 19.7677 9.48785C20.0434 9.62412 20.2839 9.82215 20.4706 10.0665C20.6573 10.3109 20.7852 10.595 20.8442 10.8969C20.9033 11.1987 20.8919 11.5101 20.811 11.8068L18.901 18.8068C18.7857 19.2298 18.5345 19.6033 18.1861 19.8696C17.8378 20.136 17.4115 20.2804 16.973 20.2808H16.972Z"
							stroke="#1F1F1F"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<path
							d="M7.5 20.2808V9.28076"
							stroke="#1F1F1F"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					&nbsp;
					{{ likeNumber }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps(['floorData'])
const { floorId, floorAuthor, isPostAuthor, floorUpdateTime, floorContent, likeNumber } = toRefs(props.floorData)

// let postAuthor: string = '用户ID'
// let floor: number = 1
// let isPostAuthor
// let postUpdateTime = ref<string>('2022-06-17 19:40')
// let postContent: string = '正文内容，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
// let likeNumber = ref<number>(96)

function addLike() {
	likeNumber.value++
}
</script>

<style lang="scss" scoped>
.postC {
	box-sizing: border-box;
	min-width: 430px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	display: flex;

	.user-box {
		box-sizing: border-box;
		width: 130px;
		border-right: 1px solid #eeeeee;
		display: flex;
		flex-direction: column;

		.user-image {
			width: 84px;
			height: 84px;
			margin-top: 12px;
			margin-left: 24px;
			margin-right: 21px;

			border-radius: 42px;
			background-color: #d9d9d9;
		}

		.user-id {
			margin-top: 11px;
			margin-left: 24px;
			margin-right: 21px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 14px;
			color: #1f1f1f;
		}
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;

		.message {
			height: 40px;
			padding-left: 30px;
			background: rgba(151, 71, 255, 0.2);
			display: flex;
			align-items: center;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 18px;
			color: #1f1f1f;

			.item {
				margin-right: 5px;
			}
		}

		.main-content {
			min-height: 160px;
			padding: 20px 30px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			color: #1f1f1f;

			white-space: pre-wrap;
		}

		.infoBar {
			display: flex;
			justify-content: flex-end;

			.item {
				width: 65px;
				height: 40px;
				margin-right: 12px;
				display: flex;
				align-items: center;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				color: #1f1f1f;

				cursor: pointer;
			}
		}
	}
}
</style>
