(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		})

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		$('a[href*=\\#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch(['images/bookshelf.jpg']);

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		/* ---------------------------------------------- /*
		 * Animation on Scroll
		/* ---------------------------------------------- */

		AOS.init();

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		var subheading = $(".rotate");
		var rotateOpts = {
			animation: "dissolve",
			separator: "|",
			speed: 3000
		};
		subheading.rotateText(rotateOpts);
		var profile = $("#profile").position();

		$(window).scroll(function(e) {
			var winTop = $(this).scrollTop();

			if (subheading.isRotating() && winTop >= profile.top) {
				subheading.stopRotating();
			}
		})
	});

})(jQuery);
