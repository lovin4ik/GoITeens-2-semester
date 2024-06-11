const activeLink = document.getElementById('activeLinkTheme');
const app = document.querySelector('.app');
const label = document.getElementById('activeLinkThemeLabel');
let Theme;

function toggle() {
	setTimeout(() => {
		if (activeLink.checked === true) {
			Theme = 'night';
			app.classList.remove('light');
			app.classList.add('night');
		} else {
			Theme = 'light';
			app.classList.add('light');
			app.classList.remove('night');
			}
		localStorage.setItem('StyleTheme', Theme)
	}, 100);
}

if (localStorage.getItem('StyleTheme')) {
	Theme = localStorage.getItem('StyleTheme')
	if (Theme === 'night') {
		toggle()
		activeLink.checked = true
		console.log(Theme);
	} else {
		activeLink.checked = false
	}
}

label.addEventListener('click', toggle);
