window.$ = window.jQuery = require('jquery')
window.niceSelect = require('jquery-nice-select')
window.debounce = require('debounce')

require('bootstrap-sass/assets/javascripts/bootstrap/dropdown')
require('bootstrap-sass/assets/javascripts/bootstrap/transition')
require('bootstrap-sass/assets/javascripts/bootstrap/collapse')

require('./backToTop')

$('select').niceSelect()