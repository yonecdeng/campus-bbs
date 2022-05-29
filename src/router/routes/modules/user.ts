export default {
	path: 'user',
	name: 'todos-user',
	component: () => import('@/views/user/index.vue'),
	meta: {
		requiresAuth: true,
		icon: 'icon-apps',
		order: 1,
	},
}
