<template>
	<div class="topBar">
		<div class="container">
			<div class="topBar-logo">
				<div class="topBar-logo-image"></div>
				<div class="topBar-logo-title">TJUlives</div>
			</div>
			<div class="topBar-nav">
				<div class="main-nav-list">
					<router-link
						v-for="nav of topBarNav"
						:key="nav.id"
						:to="nav.path"
						class="nav-item"
						active-class="nav-active"
					>
						{{ nav.navName }}
					</router-link>
				</div>
				<div class="right-side-nav">
					<div class="nav-search"><input type="text" placeholder="搜索" /></div>
					<div class="nav-items">
						<div class="nav-item"></div>
						<div class="nav-item"></div>
						<div class="nav-item"></div>
					</div>

					<div class="nav-user"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Nav {
	id: number
	navName: string
	path: string
}

const topBarNav = reactive<Nav[]>([
	{ id: 0, navName: '论坛首页', path: '/home' },
	{ id: 1, navName: '课程', path: '/course' },
])
</script>

<style lang="scss" scoped>
.topBar {
	box-sizing: border-box;
	position: relative;
	width: 100%;
	min-width: 1250px;
	height: 64px;
	background-color: #ffffff;
	border: 1px solid #f1f1f1;

	.container {
		height: 100%;
		margin: 0 60px;
		position: relative;
		display: flex;

		.topBar-logo {
			display: flex;
			align-items: center;

			.topBar-logo-image {
				width: 24px;
				height: 24px;
				background: #bcbcbc;
			}

			.topBar-logo-title {
				width: 103px;
				height: 24px;
				margin-left: 14px;
				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 700;
				font-size: 24px;
				line-height: 24px;
				color: #1f1f1f;
			}
		}

		.topBar-nav {
			position: absolute;
			left: 186px;
			right: 0;
			height: 100%;
			display: flex;
			justify-content: space-between;

			.main-nav-list {
				height: 100%;
				display: flex;
				.nav-item {
					display: flex;
					align-items: center;
					box-sizing: border-box;
					font-family: 'Microsoft YaHei';
					font-style: normal;
					font-weight: 500;
					font-size: 24px;
					color: #1f1f1f;
					text-decoration: none;
					margin: 0 22.5px;
				}
			}

			.right-side-nav {
				display: flex;
				align-items: center;

				.nav-search {
					position: relative;
					input {
						box-sizing: border-box;
						width: 443px;
						height: 36px;

						background: rgba(255, 246, 246, 0.2);
						border: 1px solid #d0d0d0;
						border-radius: 18px;
						outline: none;

						padding-left: 50px;
						margin-right: 85px;

						font-family: 'Microsoft YaHei';
						font-style: normal;
						font-weight: 400;
						font-size: 14px;
						line-height: 14px;
						color: #1f1f1f;
					}

					&::before {
						width: 24px;
						height: 24px;
						position: absolute;
						left: 16px;
						top: 6px;
						content: '';
						display: block;
						background-color: #bcbcbc;
					}
				}
			}

			.nav-items {
				width: 182px;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-right: 62px;

				.nav-item {
					width: 24px;
					height: 24px;
					background-color: #bcbcbc;
				}
			}

			.nav-user {
				width: 48px;
				height: 48px;
				border-radius: 24px;
				background-color: #bcbcbc;
			}
		}
	}
}

.nav-active {
	border-bottom: 2px solid #1f1f1f;
	transition: all 0.2s;
}
</style>
