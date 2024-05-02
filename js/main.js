new Swiper('.swiper', {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 1000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	effect: 'cards',
});
