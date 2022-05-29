const TOKEN_KEY = 'token'

const hasToken = () => {
	return !!localStorage.getItem(TOKEN_KEY)
}

const getToken = () => {
	return localStorage.getItem(TOKEN_KEY)
}

const setToken = (token: string) => {
	localStorage.setItem(TOKEN_KEY, token)
}

const removeToken = () => {
	localStorage.removeItem(TOKEN_KEY)
}

export { hasToken, getToken, setToken, removeToken }
