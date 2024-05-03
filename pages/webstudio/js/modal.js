const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const btnOpen = document.querySelector('.hero__btn');
const btnClose = document.querySelector('.modal__close');

const toggle = () => {
	modal.classList.toggle('off');
	modalWrapper.classList.toggle('modal__on');
};

btnOpen.addEventListener('click', toggle);
btnClose.addEventListener('click', toggle);
