define([
'jquery',
'Devchannel_HelloWorld/js/owlcarousel/owl.carousel.min'
	], function ($) {
'use strict';

$('.owl-carousel').owlCarousel({
loop: true,
margin: 20,
items: 5,
nav: true

});

	});