import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'

import todosRoutes from './routes'
import createRouteGuard from './guard'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/index.vue'),
			children: [
				{
					path: '/home/AAA',
					name: 'AAA',
					component: () => import('@/views/AAA/index.vue'),
				},
				{
					path: '/home/BBB',
					name: 'BBB',
					component: () => import('@/views/AAA/index.vue'),
				},
			],
		},
		{
			path: '/todos',
			name: 'todos',
			redirect: '/todos/home',
			component: () => import('@/layouts/todos.vue'),
			children: todosRoutes,
		},
		{
			path: '/login',
			name: 'auth-login',
			component: () => import('@/views/auth/login/index.vue'),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notFound',
			component: () => import('@/views/not-found/index.vue'),
		},
	],
	scrollBehavior() {
		return { top: 0 }
	},
})

createRouteGuard(router)

export default router
