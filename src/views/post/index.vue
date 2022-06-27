<template>
	<div>
		<div class="container">
			<div class="post-introduction">
				<div class="title">{{ postName }}</div>
				<div class="message">
					<div class="item">回复总数：{{ answerNumber }}</div>
					<div class="item">浏览：{{ watcherNumber }}</div>
					<div class="item">参与人数：{{ people }}</div>
				</div>
				<div class="last-answer">最近回复： {{ lastAnswerUserId }}&nbsp;&nbsp;{{ lastAnswerTime }}</div>
			</div>
			<div class="post-content">
				<div class="toggle-content" @click="toggleContent">
					<div class="toggle-item" :class="{ 'toggle-item-active': contentItem == 0 }">全部</div>
					<div class="toggle-item" :class="{ 'toggle-item-active': contentItem == 1 }">楼主</div>
					<div class="toggle-item" :class="{ 'toggle-item-active': contentItem == 2 }">热度</div>
				</div>
				<div class="main-content">
					<Floor v-for="floorData of floorDataList" :key="floorData.floorId" :floor-data="floorData" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Floor from '@/components/plate/post/floor.vue'

const route = useRoute()

// 根据路由的params参数确定当前帖子ID
const postId = computed(() => route.params.postId)

// 数据为根据postId请求
const postName = ref<string>('帖子名称')
const answerNumber = ref<number>(12345)
const watcherNumber = ref<number>(25)
const people = ref<number>(582)
const lastAnswerUserId = ref<string>('用户ID')
const lastAnswerTime = ref<string>('2022-06-17 19:40')

// 切换内容
const contentItem = ref<number>(0)

function toggleContent(e: any) {
	const contentStyle: string = e.target.innerText
	switch (contentStyle) {
		case '全部':
			contentItem.value = 0
			break
		case '楼主':
			contentItem.value = 1
			break
		case '热度':
			contentItem.value = 2
			break
		default:
			break
	}
}

interface floorData {
	floorId: number
	floorAuthor: string
	isPostAuthor: boolean
	floorUpdateTime: string
	floorContent: string
	likeNumber: number
}

const floorDataList = reactive<floorData[]>([
	{
		floorId: 1,
		floorAuthor: '发帖人ID',
		isPostAuthor: true,
		floorContent: `哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的\n哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的
		哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的
		哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的
		哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的
		哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的
		哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的
		哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的`,
		floorUpdateTime: '2022-06-17 19:40',
		likeNumber: 96,
	},
	{
		floorId: 2,
		floorAuthor: '发帖人ID',
		isPostAuthor: false,
		floorContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		floorUpdateTime: '2022-06-17 19:40',
		likeNumber: 96,
	},
	{
		floorId: 3,
		floorAuthor: '发帖人ID',
		isPostAuthor: false,
		floorContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		floorUpdateTime: '2022-06-17 19:40',
		likeNumber: 96,
	},
	{
		floorId: 4,
		floorAuthor: '发帖人ID',
		isPostAuthor: false,
		floorContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		floorUpdateTime: '2022-06-17 19:40',
		likeNumber: 96,
	},
])
</script>

<style lang="scss" scoped>
.container {
	box-sizing: border-box;
	width: 62.5%;
	height: 100%;
	margin: auto;
	padding-top: 48px;
	display: flex;
	flex-direction: column;

	.post-introduction {
		box-sizing: border-box;
		height: 136px;
		background-color: #ffffff;
		border: 1px solid #eeeeee;

		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 6px;
			background-color: #9747ff;
		}

		.title {
			margin: 10px 35px 22px;

			line-height: 32px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			color: #1f1f1f;
		}

		.message {
			margin-left: 35px;
			margin-bottom: 8px;

			display: flex;

			.item {
				margin-right: 15px;
				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 18px;
				line-height: 18px;
				color: #1f1f1f;
			}
		}

		.last-answer {
			margin-left: 35px;
			display: flex;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 18px;
			color: #b1b1b1;
		}
	}

	.post-content {
		flex: 1;
		width: 100%;
		background-color: #f5f5f5;

		display: flex;
		flex-direction: column;
		overflow: hidden;

		.toggle-content {
			height: 40px;
			margin: 8px 0;
			.toggle-item {
				display: inline-block;
				width: 60px;
				text-align: center;
				line-height: 40px;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 18px;
				color: #1f1f1f;
				cursor: pointer;
				transition: all 0.2s;
			}

			.toggle-item-active {
				background-color: #9747ff;
				color: #ffffff;
			}
		}

		.main-content {
			flex: 1;
			overflow-x: hidden;

			&::-webkit-scrollbar {
				width: 8px;
			}
			&::-webkit-scrollbar-track {
				border-radius: 2px;
			}
			&::-webkit-scrollbar-thumb {
				background: rgba(217, 217, 217, 0.6);
				opacity: 0.2;
				border-radius: 4px;
			}
			&::-webkit-scrollbar-thumb:hover {
				background: rgba(217, 217, 217, 1);
			}

			display: grid;
			grid-template-rows: repeat(auto-fill);
			grid-gap: 8px;
		}
	}
}
</style>
