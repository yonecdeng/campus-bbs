import { defineStore } from 'pinia'
import defaultSettings from '@/config/settings.json' // ！！这些配置其实应该从后台那里拿
import { AppState } from './types'
import { getSettings, setSettings } from '@/utils/storage/settings-operator'

Object.assign(defaultSettings, getSettings()) // 用缓存中的设置覆盖掉默认设置

/* 整个app的一些配置信息 */
const useAppStore = defineStore('app', {
	state: (): AppState => ({ ...defaultSettings }),

	getters: {
		appCurrentSetting(state: AppState): AppState {
			return { ...state }
		},
		appDevice(state: AppState) {
			return state.device
		},
	},

	actions: {
		// Update app settings
		updateSettings(partial: Partial<AppState>) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore-next-line
			this.$patch(partial)
			setSettings(this.$state)
		},

		initTheme() {
			if (this.theme === 'light') return
			document.body.setAttribute('theme', 'dark')
		},
		// Change theme color
		toggleTheme() {
			switch (this.theme) {
				case 'dark':
					this.theme = 'light'
					document.body.removeAttribute('theme')
					setSettings(this.$state)
					break
				case 'light':
					this.theme = 'dark'
					document.body.setAttribute('theme', 'dark')
					setSettings(this.$state)
					break
				default:
					break
			}
		},
		toggleDevice(device: string) {
			this.device = device
		},
		toggleMenu(value: boolean) {
			this.hideMenu = value
		},
	},
})

export default useAppStore
