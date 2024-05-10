const burgerMenu = document.querySelector('.burger__menu')
const burgerClose = document.querySelector('.burger__close')
const burgerOpen = document.querySelector('.burger__open')

const burger = () => {
	burgerMenu.classList.toggle('burger__off')
}

burgerOpen.addEventListener('click', burger)
burgerClose.addEventListener('click', burger)
