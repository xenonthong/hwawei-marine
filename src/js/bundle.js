window.$ = window.jQuery = require('jquery')
window.niceSelect = require('jquery-nice-select')
window.debounce = require('debounce')
var loadTouchEvents = require('jquery-touch-events')

require('bootstrap-sass/assets/javascripts/bootstrap/dropdown')
require('bootstrap-sass/assets/javascripts/bootstrap/transition')
require('bootstrap-sass/assets/javascripts/bootstrap/collapse')
require('bootstrap-sass/assets/javascripts/bootstrap/modal')
require('bootstrap-sass/assets/javascripts/bootstrap/carousel')

require('./backToTop')
require('./stickyMenu')
require('./heroVideo')

// Init niceSelect
$('select').niceSelect()

// Init bootstrap carousel
$('.carousel').carousel({
	interval: false
})

// Init touch events
loadTouchEvents($)

// Allow carousel to be swipeable
require('./swipeableCarousel')