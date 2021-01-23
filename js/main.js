$(document).ready(function() {
	$('.burger').click(function() {
		$('.menu').slideToggle('500')
		$('.burger__item:first-child').toggleClass('burger__item-top')
		$('.burger__item:nth-child(2)').toggleClass('burger__item-middle')
		$('.burger__item:last-child').toggleClass('burger__item-bottom');
	});
	$('.wrap__btn').on('click', function() {	
		$(this).parent().toggleClass('unvisible');
	});
	$('.person__slider').slick({
		dots: true,
 		infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        draggable: false
	});
});