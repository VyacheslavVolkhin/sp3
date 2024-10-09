document.addEventListener("DOMContentLoaded", function() {

	//slider reviews
	const swiperSliderReviews = new Swiper('.slider-reviews .swiper', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 400,
		pagination: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: false,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	
		
	});


})