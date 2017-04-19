let stickyMenu = {
	data: {
		menu: $('.navbar'),
		stickyClass: 'navbar-inverse',
		logo: $('.navbar-brand img'),
	},

	appearAfter(offset) {
		$(window).scroll(debounce(function() {

			$this = $(this);

			// If use has scrolled passed the defined position.
			if ($this.scrollTop() >= offset) {
				stickyMenu.show();
			} else {
				stickyMenu.hide();
			}

		}, 250));
	},

	show() {
		stickyMenu.data.menu.addClass(stickyMenu.data.stickyClass);
		stickyMenu.data.logo.attr('src', 'img/hwawei_marine_logo_alt.png');
	},

	hide() {
		stickyMenu.data.menu.removeClass(stickyMenu.data.stickyClass);
		stickyMenu.data.logo.attr('src', 'img/hwawei_marine_logo.png');
	},

	init() {
		stickyMenu.appearAfter(500);
	}
}

stickyMenu.init();