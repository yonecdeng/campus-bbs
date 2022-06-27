<template>
	<div class="sideBar">
		<ul>
			<li v-for="plateData of plateDataList" :key="plateData.plateId" :style="plateData.plateColor">
				<router-link :to="plateData.platePath" class="link" active-class="active">
					<div class="link-logo"></div>
					{{ plateData.plateName }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 版块链接信息
interface plateData {
	plateId: number
	plateName: string
	platePath: string
	plateColor: { '--plateColor': string; '--activeColor': string }
}

const plateDataList = reactive<plateData[]>([
	{
		plateId: 0,
		plateName: 'AAA',
		platePath: '/home/AAA',
		plateColor: { '--plateColor': '#FFBDF2', '--activeColor': 'rgba(255, 189, 242, 0.2)' },
	},
	{
		plateId: 1,
		plateName: 'BBB',
		platePath: '/home/BBB',
		plateColor: { '--plateColor': '#D9B8FF', '--activeColor': 'rgba(151, 71, 255, 0.2)' },
	},
])

// 加载完成后自动跳转到第一个版块
onMounted(() => router.push(plateDataList[0].platePath))
</script>

<style lang="scss" scoped>
.sideBar {
	width: 325px;
	height: 100%;
	background: #ffffff;
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

	ul {
		padding: 0;
		margin: 0;
		margin-top: 40px;

		li {
			list-style: none;
			margin-top: 8px;
			.link {
				--beforeActiveColor: #ffffff;

				display: block;
				height: 40px;
				text-decoration: none;
				display: flex;
				align-items: center;
				transition: all 0.4s;

				font-family: 'Helvetica';
				font-style: normal;
				font-weight: 400;
				font-size: 18px;
				line-height: 18px;
				color: #1f1f1f;

				&::before {
					display: block;
					content: '';
					width: 4px;
					height: 40px;
					background-color: var(--beforeActiveColor);
				}
				.link-logo {
					width: 14px;
					height: 14px;
					margin-left: 40px;
					margin-right: 12px;
					border-radius: 7px;
					background-color: var(--plateColor);
				}

				&:hover {
					background-color: var(--activeColor);
					--beforeActiveColor: var(--plateColor);
				}
			}
		}
	}
}

.active {
	background-color: var(--activeColor);

	&::before {
		--beforeActiveColor: var(--plateColor);
	}
}
</style>
