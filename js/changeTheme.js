const activeLink = document.getElementById('activeLinkTheme');
const app = document.querySelector('.app');
const label = document.getElementById('activeLinkThemeLabel')

const toggle = () => {
	setTimeout(() => {
		if (activeLink.checked == true) {
			app.classList.remove('light')
			app.classList.add('night')
		} else {
			app.classList.add('light')
			app.classList.remove('night')
		}
	}, 100)
}

label.addEventListener('click', toggle)