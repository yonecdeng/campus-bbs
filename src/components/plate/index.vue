<template>
	<div>
		<div class="container">
			<div class="plate-introduction">
				<div class="title">{{ plateName }}</div>
				<div class="message">
					<div class="item">帖子总数：{{ postNumber }}</div>
					<div class="item">今日：{{ todayPostNumber }}</div>
					<div class="item">参与人数：{{ people }}</div>
				</div>
				<div class="introduction">{{ introduction }}</div>
			</div>
			<div class="plate-content">
				<div class="toggle-content" @click="toggleContent">
					<div class="toggle-item" :class="{ 'toggle-item-active': contentItem == 0 }">全部</div>
					<div class="toggle-item" :class="{ 'toggle-item-active': contentItem == 1 }">精华</div>
				</div>
				<div class="tools">
					<div class="sort" @click="toggleSortType">
						排序方式：
						<div class="sort-item" :class="{ 'sort-item-active': sortItem == 0 }">时间</div>
						<div class="sort-item" :class="{ 'sort-item-active': sortItem == 1 }">热度</div>
						<div class="sort-item" :class="{ 'sort-item-active': sortItem == 2 }">点赞</div>
					</div>
					<div class="toggle-view" @click="toggleView">
						<div class="view-item" :class="{ 'view-item-active': viewType == 0 }" data-view="0">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="3.5" y="3.5" width="17" height="4" rx="1.5" :stroke="viewTypeAColor" />
								<rect x="3.5" y="9.5" width="17" height="4" rx="1.5" :stroke="viewTypeAColor" />
								<rect x="3.5" y="15.5" width="17" height="4" rx="1.5" :stroke="viewTypeAColor" />
							</svg>
						</div>
						<div class="view-item" :class="{ 'view-item-active': viewType == 1 }" data-view="1">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="3.5" y="3.5" width="7" height="7" rx="1.5" :stroke="viewTypeBColor" />
								<rect x="13.5" y="3.5" width="7" height="7" rx="1.5" :stroke="viewTypeBColor" />
								<rect x="13.5" y="12.5" width="7" height="7" rx="1.5" :stroke="viewTypeBColor" />
								<rect x="3.5" y="12.5" width="7" height="7" rx="1.5" :stroke="viewTypeBColor" />
							</svg>
						</div>
						<div class="view-item" :class="{ 'view-item-active': viewType == 2 }" data-view="2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="3.5" y="3.5" width="5" height="4" rx="1.5" :stroke="viewTypeCColor" />
								<rect x="10.5" y="3.5" width="10" height="4" rx="1.5" :stroke="viewTypeCColor" />
								<rect x="10.5" y="9.5" width="10" height="4" rx="1.5" :stroke="viewTypeCColor" />
								<rect x="10.5" y="15.5" width="10" height="4" rx="1.5" :stroke="viewTypeCColor" />
								<rect x="3.5" y="9.5" width="5" height="4" rx="1.5" :stroke="viewTypeCColor" />
								<rect x="3.5" y="15.5" width="5" height="4" rx="1.5" :stroke="viewTypeCColor" />
							</svg>
						</div>
					</div>
				</div>
				<div class="content">
					<div v-show="viewType == 0" class="typeA">
						<TypeA v-for="postData of postDataList" :key="postData.postId" :post-data="postData" />
					</div>
					<div v-show="viewType == 1" class="typeB">
						<TypeB
							v-for="(postData, index) of postDataList"
							:key="postData.postId"
							:post-data="postData"
							:index="index"
						/>
					</div>
					<div v-show="viewType == 2" class="typeC">
						<div class="sideBar">
							<TypeC
								v-for="postData of postDataList"
								:key="postData.postId"
								:post-data="postData"
								:is-selected="selectedPostId == postData.postId"
								@click="selectPost(postData.postId)"
							/>
						</div>
						<div class="main-content">
							<Floor
								v-for="floorData of floorDataList"
								:key="floorData.floorId"
								:floor-data="floorData"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import TypeA from './post/typeA.vue'
import TypeB from './post/typeB.vue'
import TypeC from './post/typeC.vue'
import Floor from './post/floor.vue'

const route = useRoute()

// 根据路由的params参数确定当前版块
const plateName = computed(() => route.params.plateName)

const postNumber = ref<number>(12345)
const todayPostNumber = ref<number>(25)
const people = ref<number>(582)
const introduction = ref<string>('版块简介，概括版块包含什么内容，以及一些注意事项，后面可能会区分一些热帖和普通贴')

// 切换内容
const contentItem = ref<number>(0)

// 内容选择具体后续完成
function toggleContent(e: any) {
	const contentStyle: string = e.target.innerText
	switch (contentStyle) {
		case '全部':
			contentItem.value = 0
			break
		case '精华':
			contentItem.value = 1
			break
		default:
			break
	}
}

// 切换排序
const sortItem = ref<number>(0)

// 具体排序后续完成
function toggleSortType(e: any) {
	const sortStyle: string = e.target.innerText
	switch (sortStyle) {
		case '时间':
			sortItem.value = 0
			break
		case '热度':
			sortItem.value = 1
			break
		case '点赞':
			sortItem.value = 2
			break
		default:
			break
	}
}

// 视图选项颜色信息
const viewTypeAColor = ref<string>('#9747FF')
const viewTypeBColor = ref<string>('#1F1F1F')
const viewTypeCColor = ref<string>('#1F1F1F')

// 切换视图
const viewType = ref<number>(0)

function toggleView(e: any) {
	const view: string = e.target.getAttribute('data-view')
	viewTypeAColor.value = '#1F1F1F'
	viewTypeBColor.value = '#1F1F1F'
	viewTypeCColor.value = '#1F1F1F'
	switch (view) {
		case '0':
			viewType.value = 0
			viewTypeAColor.value = '#9747FF'
			break
		case '1':
			viewType.value = 1
			viewTypeBColor.value = '#9747FF'
			break
		case '2':
			viewType.value = 2
			viewTypeCColor.value = '#9747FF'
			break
		default:
			break
	}
}

// 帖子数据信息
interface postData {
	postId: number
	postName: string
	postAuthor: string
	postContent: string
	postUpdateTime: string
	commentNumber: number
	watcherNumber: number
	isSticky: boolean
	isPick: boolean
}

const postDataList = reactive<postData[]>([
	{
		postId: 0,
		postName: '帖子A',
		postAuthor: '发帖人ID',
		postContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		postUpdateTime: '2022-06-17 19:40',
		commentNumber: 96,
		watcherNumber: 150,
		isSticky: true,
		isPick: true,
	},
	{
		postId: 1,
		postName: '帖子B',
		postAuthor: '发帖人ID',
		postContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		postUpdateTime: '2022-06-19 19:40',
		commentNumber: 100,
		watcherNumber: 151,
		isSticky: true,
		isPick: true,
	},
	{
		postId: 2,
		postName: '帖子C',
		postAuthor: '发帖人ID',
		postContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		postUpdateTime: '2022-06-18 19:40',
		commentNumber: 100,
		watcherNumber: 150,
		isSticky: true,
		isPick: true,
	},
	{
		postId: 3,
		postName: '帖子D',
		postAuthor: '发帖人ID',
		postContent: '哈佛是工设和你是否经发局计算结果就覅好烦安家费IE家乐福自己的',
		postUpdateTime: '2022-06-18 19:40',
		commentNumber: 100,
		watcherNumber: 150,
		isSticky: false,
		isPick: false,
	},
])

// 楼层信息
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
])

// 模式C中选中帖子加载相关楼层信息
const selectedPostId = ref<number>(0)
function selectPost(postId: number) {
	selectedPostId.value = postId
	// 后续根据postID请求楼层信息
}
</script>

<style lang="scss" scoped>
.container {
	height: 100%;
	position: relative;

	.plate-introduction {
		height: 192px;
		background-color: #ffffff;
		position: relative;

		.title {
			position: absolute;
			left: 10px;
			top: 38px;
			line-height: 32px;

			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			color: #1f1f1f;
		}

		.message {
			position: absolute;
			left: 10px;
			top: 107px;
			display: flex;

			.item {
				margin-right: 15px;
				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 18px;
				line-height: 18px;
				color: #b1b1b1;
			}
		}

		.introduction {
			position: absolute;
			left: 10px;
			top: 155px;
			font-family: 'Microsoft YaHei';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 18px;
			color: #1f1f1f;
		}
	}

	.plate-content {
		position: absolute;
		top: 192px;
		bottom: 0;
		width: 100%;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;

		.toggle-content {
			height: 40px;
			background-color: #ffffff;
			border-bottom: 1px solid #eeeeee;
			padding-left: 10px;
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

		.tools {
			height: 24px;
			margin: 16px 0;
			display: flex;
			justify-content: space-between;
			padding-left: 10px;
			padding-right: 60px;

			.sort {
				display: flex;

				font-family: 'Microsoft YaHei';
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				color: #1f1f1f;
				.sort-item {
					width: 60px;
					height: 24px;
					line-height: 22px;
					margin-right: 6px;
					border-radius: 12px;
					text-align: center;
					cursor: pointer;
					transition: all 0.2s;
				}

				.sort-item-active {
					background: #9747ff;
					color: #ffffff;
				}
			}

			.toggle-view {
				width: 122px;
				display: flex;
				justify-content: space-between;

				.view-item {
					width: 24px;
					height: 24px;
					cursor: pointer;
					position: relative;

					&::after {
						content: '';
						display: block;
						position: absolute;
						left: 0;
						top: 0;
						width: 24px;
						height: 24px;
						z-index: 1;
					}
				}
			}
		}

		.content {
			box-sizing: border-box;
			flex: 1;
			margin-left: 10px;
			margin-right: 60px;

			display: flex;
			overflow: hidden;

			.typeA {
				width: 100%;
				height: 100%;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 10px;
				overflow-x: hidden;

				//修改滚动条样式
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
			}

			.typeB {
				width: 100%;
				height: 100%;
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: repeat(auto-fill, 48px);
				grid-gap: 4px;
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
			}

			.typeC {
				width: 100%;
				height: 100%;
				display: flex;
				.sideBar {
					width: 410px;
					height: 100%;
					margin-right: 10px;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: repeat(auto-fill, 144px);
					grid-gap: 8px;
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
				}

				.main-content {
					flex: 1;
					height: 100%;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: repeat(auto-fill);
					grid-gap: 8px;
					overflow-x: hidden;

					&::-webkit-scrollbar {
						width: 8px;
					}
					&::-webkit-scrollbar-thumb {
						background: rgba(217, 217, 217, 0.6);
						opacity: 0.2;
						border-radius: 4px;
					}
					&::-webkit-scrollbar-thumb:hover {
						background: rgba(217, 217, 217, 1);
					}
				}
			}
		}
	}
}
</style>
