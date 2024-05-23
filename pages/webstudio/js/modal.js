const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const btnOpen = document.querySelector('.hero__btn');
const btnClose = document.querySelector('.modal__close');
const body = document.querySelector('.app');

const toggle = () => {
	modal.classList.toggle('off');
	modalWrapper.classList.toggle('modal__on');
	body.classList.toggle('no-scroll');
};

btnOpen.addEventListener('click', toggle);
btnClose.addEventListener('click', toggle);
