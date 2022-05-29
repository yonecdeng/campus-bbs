export default {
	path: 'home',
	name: 'todos-home',
	component: () => import('@/views/home/index.vue'),
	meta: {
		requiresAuth: true,
		icon: 'icon-apps',
		order: 1,
	},
}
