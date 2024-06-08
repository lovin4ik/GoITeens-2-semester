const refs = {
	modal: document.querySelector('.modal'),
	modalWrapper: document.querySelector('.modal__wrapper'),
	btnOpen: document.querySelector('.hero__btn'),
	btnClose: document.querySelector('.modal__close'),
	body: document.querySelector('.app'),
};

let isActive = false

const toggle = (e) => {
	isActive =! isActive
	refs.modal.classList.toggle('off');
	refs.modalWrapper.classList.toggle('modal__on');
	refs.body.classList.toggle('no-scroll');
};

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		if (isActive === true) {
			toggle()
		} else return
	} else return
})
refs.modalWrapper.addEventListener('click', (e) => {
	e.stopPropagation();
});

refs.btnOpen.addEventListener('click', toggle);
refs.btnClose.addEventListener('click', toggle);
refs.modal.addEventListener('click', toggle);