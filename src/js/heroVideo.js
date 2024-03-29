var heroVideo = {
	data: {
		minWidth: 768, // Minimum width to autoplay
		video: $('.hero video')
	},

	autoplay() {
		let video = heroVideo.data.video[0]

		if (typeof video !== 'undefined') {
			video.play();
		}
	},

	checkWidth() {
		if(document.body.clientWidth >= heroVideo.data.minWidth) {
			return true;
		}
	},

	/**
	 * Checks if the window is larger than the minWidth on resize.
	 */
	windowResize() {
		$(window).resize(debounce(function() {
			if (heroVideo.checkWidth()) {
				heroVideo.autoplay();
			}
		}, 250));
	},

	init() {

		if (heroVideo.checkWidth()) {
			heroVideo.autoplay();
		}

		heroVideo.windowResize();
	}
}

heroVideo.init();
