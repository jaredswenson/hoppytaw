$(document).ready(function(){
	$('.parallax').parallax();
	$('.modal').modal();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$(".button-collapse").sideNav();
	$('span').tooltip();
	$('.modal-trigger').on('click', function () {
		$('#mobile-demo').hide();
		$('#mobile-demo').show();
		$(".button-collapse").sideNav();
	});
});