var $win = $(window);
$win.scroll(function () {
	if ($win.scrollTop() > 45) {
		$("nav").addClass("navbarcolor");
	} else {
		$("nav").removeClass("navbarcolor");
	}
});
$('a.link[href^="#"]').click(function(e) {
 	var target = $(this).attr('href');
 	var strip = target.slice(1);
 	var anchor = $("section[id='" + strip + "']");
 	e.preventDefault();
 	y = (anchor.offset() || {
 		"top" : NaN
 	}).top;
 	$('html, body').animate({
 		scrollTop : (y - 40)
 	}, 'slow');
});
function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function verificarDatos(e) {
	if(e.keyCode === 13){
		e.preventDefault();
		ingresar();
    }
}
$('#home .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		}
	},
	navigation: false,
	nav: true,
	loop: true,
	dots: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplay: true,
	autoplayTimeout: 5000,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});
$('.js-espacio--principal .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		},
		400: {
			items: 2
		},
		768: {
			items: 3
		}
	},
	navigation: false,
	nav: true,
	loop: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 5000,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});
$('.js-carousel .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		}
	},
	navigation: false,
	nav: true,
	loop: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 5000,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});