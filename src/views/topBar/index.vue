<template>
	<div class="topBar">
		<div class="container">
			<div class="topBar-logo">
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
					<div class="nav-search">
						<div class="search-logo">
							<svg
								width="18"
								height="18"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.2776 14.5L18.7776 19M0.777588 8.71429C0.777588 9.72734 0.977124 10.7305 1.3648 11.6664C1.75248 12.6024 2.32071 13.4528 3.03705 14.1691C3.75339 14.8854 4.6038 15.4537 5.53974 15.8414C6.47568 16.229 7.47882 16.4286 8.49187 16.4286C9.50493 16.4286 10.5081 16.229 11.444 15.8414C12.3799 15.4537 13.2304 14.8854 13.9467 14.1691C14.663 13.4528 15.2313 12.6024 15.6189 11.6664C16.0066 10.7305 16.2062 9.72734 16.2062 8.71429C16.2062 6.66833 15.3934 4.70617 13.9467 3.25946C12.5 1.81275 10.5378 1 8.49187 1C6.44592 1 4.48376 1.81275 3.03705 3.25946C1.59034 4.70617 0.777588 6.66833 0.777588 8.71429V8.71429Z"
									stroke="#1F1F1F"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<input type="text" placeholder="搜索" />
					</div>
					<div class="nav-items">
						<div class="nav-item">
							<a href="javascript:">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.1514 11.0443C16.5795 15.2512 18.2632 16.5231 18.2632 16.5231H5C5 16.5231 7.21053 14.8536 7.21053 9.00925C7.21053 7.68102 7.67621 6.40679 8.50516 5.46755C9.33484 4.52832 10.46 4 11.6316 4C11.8799 4 12.1267 4.02348 12.3684 4.07044M12.2682 21.2193C12.1388 21.4567 11.9529 21.6538 11.7292 21.7908C11.5055 21.9279 11.2517 22 10.9935 22C10.7352 22 10.4815 21.9279 10.2578 21.7908C10.034 21.6538 9.84813 21.4567 9.71874 21.2193M16.7895 8.69617C17.3757 8.69617 17.938 8.44879 18.3526 8.00843C18.7671 7.56808 19 6.97084 19 6.34809C19 5.72534 18.7671 5.12809 18.3526 4.68774C17.938 4.24739 17.3757 4 16.7895 4C16.2032 4 15.6409 4.24739 15.2264 4.68774C14.8118 5.12809 14.5789 5.72534 14.5789 6.34809C14.5789 6.97084 14.8118 7.56808 15.2264 8.00843C15.6409 8.44879 16.2032 8.69617 16.7895 8.69617Z"
										stroke="#1F1F1F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
						<div class="nav-item">
							<a href="javascript:">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.9998 14.7C12.7159 14.7 13.4026 14.4156 13.909 13.9092C14.4153 13.4029 14.6998 12.7161 14.6998 12C14.6998 11.284 14.4153 10.5972 13.909 10.0909C13.4026 9.58451 12.7159 9.30005 11.9998 9.30005C11.2837 9.30005 10.597 9.58451 10.0906 10.0909C9.58427 10.5972 9.2998 11.284 9.2998 12C9.2998 12.7161 9.58427 13.4029 10.0906 13.9092C10.597 14.4156 11.2837 14.7 11.9998 14.7V14.7Z"
										stroke="#1F1F1F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M18.8598 10.5555L17.8725 8.1705L19.2 6.6L17.4 4.8L15.8385 6.1347L13.4022 5.133L12.8415 3H11.0829L10.5141 5.1609L8.1336 6.1644L6.6 4.8L4.8 6.6L6.1077 8.2101L5.1357 10.6014L3 11.1V12.9L5.1609 13.4895L6.1644 15.87L4.8 17.4L6.6 19.2L8.2119 17.886L10.5573 18.8508L11.1 21H12.9L13.4436 18.8517L15.8295 17.8635C16.2273 18.1479 17.4 19.2 17.4 19.2L19.2 17.4L17.8644 15.825L18.8526 13.4382L21 12.8802V11.1L18.8598 10.5555Z"
										stroke="#1F1F1F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div class="nav-user"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
//
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

			.topBar-logo-title {
				width: 103px;
				height: 24px;
				margin-left: 65px;
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
			left: 243px;
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
					font-weight: 700;
					font-size: 24px;
					color: #1f1f1f;
					white-space: nowrap;
					text-decoration: none;
					margin: 0 22px;
				}
			}

			.right-side-nav {
				display: flex;
				align-items: center;

				.nav-search {
					position: relative;

					.search-logo {
						width: 18px;
						height: 18px;
						position: absolute;
						left: 18px;
						top: 9px;
					}

					@media screen and (min-width: 992px) {
						input {
							width: 243px;
						}
					}

					@media screen and (min-width: 1200px) {
						input {
							width: 343px;
						}
					}

					@media screen and (min-width: 1600px) {
						input {
							width: 443px;
						}
					}

					input {
						box-sizing: border-box;
						height: 36px;

						background: rgba(255, 246, 246, 0.2);
						border: 1px solid #d0d0d0;
						border-radius: 18px;
						outline: none;

						padding-left: 48px;
						margin-right: 36px;

						font-family: 'Microsoft YaHei';
						font-style: normal;
						font-weight: 400;
						font-size: 14px;
						line-height: 14px;
						color: #1f1f1f;

						transition: all 0.2s;
					}
				}
			}

			.nav-items {
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-right: 17px;

				.nav-item {
					margin: 0 15px;

					a {
						display: block;
						width: 24px;
						height: 24px;
						line-height: 24px;
						text-align: center;
					}
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
