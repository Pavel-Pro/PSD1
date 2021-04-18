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
	    responsive: [{
		    	breakpoint: 1200,
		    	settings: {
		    		centerMode: true,
		    		slidesToScroll: true,
		    		slidesToShow: 3
		    	}
		    },
		    {
		    	breakpoint: 950,
		    	settings: {
		    		centerMode: true,
		    		slidesToScroll: true,
		    		centerMode: true,
		    		centerPadding: '50px',
		    		slidesToShow: 2
		    	}
		    },
		    {
		    	breakpoint: 700,
		    	settings: {
		    		centerMode: true,
		    		slidesToScroll: true,
		    		centerMode: true,
		    		centerPadding: '40px',
		    		slidesToShow: 2
		    	}
		    }
	    ]
	});
	$('.pricing__items').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 700,
			settings: {
				centerMode: true,
				slidesToScroll: true,
				centerMode: true,
				centerPadding: '100px',
				focusOnSelect: true,
				slidesToShow: 1
			}
		}]
	});
	$('.testimonials__items').slick({
		dots: true,
		arrows: false
	});
	$(window).on('scroll', function(){
		var screenHeight = window.innerHeight;
		var currentHeight = $(document).scrollTop();
		if (currentHeight >= screenHeight) {
			$('.to-top').fadeIn(1000);
		} else {
			$('.to-top').fadeOut(500);
		}
	});

	$('.to-top').on('click', function() {
		$(document).scrollTop(0);
	});

	$('.to-top').on('mouseover', function() {
  		$(this).addClass('hover');
	});

	$('.to-top').on('mouseleave', function() {
  		$(this).removeClass('hover');
	});

	$(window).on('scroll', function(){
		var menuShow = $('.aboutus').offset().top;
		var currentHeight = $(document).scrollTop();
		if (currentHeight >= menuShow) {
			$('.main').addClass('fixed');
			$('.header').addClass('fixed');
		} else {
			$('.main').removeClass('fixed');
			$('.header').removeClass('fixed');
		}
	});
});
