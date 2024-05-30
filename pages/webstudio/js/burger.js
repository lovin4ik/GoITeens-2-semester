const burgerMenu = document.querySelector('.burger__menu');
const burgerClose = document.querySelector('.burger__close');
const burgerOpen = document.querySelector('.burger__open');
const body = document.querySelector('.app');

const burger = () => {
	burgerMenu.classList.toggle('burger__on');
	body.classList.toggle('no-scroll');
};

burgerOpen.addEventListener('click', burger);
burgerClose.addEventListener('click', burger);
