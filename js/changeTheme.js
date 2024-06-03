const refs = {
	btn: document.querySelector('.header__navbar__nav__theme__btn'),
	activeLink: document.querySelector('.activeLinkTheme'),
	body: document.querySelector('.app')
}
const toggle = () => {
	refs.activeLink.classList.toggle('light')
	refs.activeLink.classList.toggle('night')
	refs.body.classList.toggle('light')
	refs.body.classList.toggle('night')
}
refs.btn.addEventListener('click', toggle)