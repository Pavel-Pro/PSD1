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
	$('.testimonials__items').slick({
		dots: true,
		arrows: false
	});
	$('.about-person-slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.our-team__items'

	});
	$('.our-team__items').slick({
	    slidesToShow: 4,
	    slidesToScroll: false,
	    asNavFor: '.about-person-slider',
	    dots: false,
	    centerMode: true,
	    focusOnSelect: true,
	    arrows: false,
	    centerPadding: '0px',
	    responsive: [
		    {
		    	breakpoint: 1200,
		    	settings: {
		    		centerMode: true,
		    		slidesToScroll: true,
		    		slidesToShow: 3
		    	}
		    }
	    ]
	});
});
