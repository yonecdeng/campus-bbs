import { AppState } from '@/store/modules/app/types'

const KEY = 'settings'
const hasSettings = () => {
	return !!localStorage.getItem(KEY)
}

const getSettings = () => {
	if (!hasSettings) return null
	return JSON.parse(localStorage.getItem(KEY) as string)
}

const setSettings = (settings: AppState) => {
	localStorage.setItem(KEY, JSON.stringify(settings))
}

const clearSettings = () => {
	localStorage.removeItem(KEY)
}
export { hasSettings, getSettings, setSettings, clearSettings }
