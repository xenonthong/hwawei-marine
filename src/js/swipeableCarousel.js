var swipeableCarousel = {
	swipeable() {
		let carousel = $('.carousel');

		carousel.on("swipeleft", function(){
			$(this).carousel('next');
		});

		carousel.on("swiperight", function(){
			$(this).carousel('prev');
		});
	},

	init() {
		this.swipeable();
	}
}

swipeableCarousel.init();