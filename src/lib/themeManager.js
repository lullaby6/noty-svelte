export function setTheme(theme) {
	localStorage.theme = theme

	if(theme === 'dark') document.documentElement.classList.add('dark')
	else document.documentElement.classList.remove('dark')
}

export function toggleTheme() {
	setTheme(
		localStorage.theme == 'light'
			? 'dark'
			: 'light'
	)
}

export function setDefaultTheme(){
	setTheme(
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	)
}

export function getTheme(){
	return localStorage.theme
}

export function getDefaultTheme(){
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export function startThemeManager(){
	if(localStorage.hasOwnProperty('theme')) setTheme(localStorage.theme)
	else setDefaultTheme()
	
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event =>
		setTheme(
			event.matches
				? 'dark'
				: 'light'
		)
	)	
}