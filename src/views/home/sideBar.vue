<template>
	<div class="sideBar">
		<ul>
			<li v-for="link of links" :key="link.id">
				<router-link :to="link.linkPath" class="link" active-class="active">
					<div class="link-logo"></div>
					{{ link.linkName }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
interface Link {
	id: number
	linkName: string
	linkPath: string
}

const links = reactive<Link[]>([
	{ id: 0, linkName: 'AAA', linkPath: '/home/AAA' },
	{ id: 1, linkName: 'BBB', linkPath: '/home/BBB' },
])
</script>

<style lang="scss" scoped>
.sideBar {
	width: 246px;
	height: 100%;
	background: #ffffff;
	box-shadow: 8px 8px 8px rgba(239, 239, 239, 0.25), 4px 4px 4px rgba(172, 172, 172, 0.25);
	overflow: auto;

	ul {
		padding: 0;
		margin: 0;

		li {
			list-style: none;
			margin-top: 8px;
			.link {
				display: block;
				height: 40px;
				text-decoration: none;
				display: flex;
				align-items: center;

				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				color: #000000;

				.link-logo {
					width: 14px;
					height: 14px;
					margin-left: 16px;
					margin-right: 10px;
					background-color: #ffffff;
				}

				&::before {
					content: '';
					display: block;
					width: 4px;
					height: 40px;
					background-color: #d9d9d9;
				}

				&:hover {
					background-color: #f1f1f1;
					transition: all 0.5s;
				}
			}
		}
	}
}

.active {
	background-color: #f1f1f1;
	transition: all 0.5s;
}
</style>
