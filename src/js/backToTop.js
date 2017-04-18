let scrollToTop = {
	data: {
		btn: $('.btn-btt')
	},

	appearAfter(offset) {
		$(window).scroll(debounce(function() {

			$this = $(this);

			// If use has scrolled passed the defined position.
			if ($this.scrollTop() >= offset) {
				scrollToTop.showButton();

				if ($this.data('scrollTimeout')) {
					// Reset timer if user is still scrolling.
					clearTimeout($this.data('scrollTimeout'));
				}
				
				// Hide btt button after 3 seconds user has stopped scrolling.
				$this.data('scrollTimeout', setTimeout(scrollToTop.hideButton, 3000));
			} else {
				scrollToTop.hideButton();
			}
		}, 250));
	},

	hideButton() {
		scrollToTop.data.btn.fadeOut(200);
	},

	showButton() {
		scrollToTop.data.btn.fadeIn(200);
	},

	clicked() {
		scrollToTop.data.btn.click(function() {
			$('body,html').animate({
				scrollTop : 0
			}, 500);
		});
	},

	init() {
		scrollToTop.appearAfter(200);
		scrollToTop.clicked();
	}
}

scrollToTop.init();