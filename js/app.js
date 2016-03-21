$( document ).ready(function() { 
	$(".nav .btn-home").click(function(event) {
		event.preventDefault();
		$('.nav li').removeClass('active');
		var goTop = $(".splash").offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 1000, "easeInOutQuart");
	});

	$(".nav .btn-portfolio").click(goToProjects);

	initScrollReveal();
});

function goToProjects (event) {
	$('.nav li').removeClass('active');
	var goTop = $(".projects").offset().top;
	$("html, body").animate({
		scrollTop: goTop
	}, 1000, "easeInOutQuart");
	event.preventDefault();
}

function initScrollReveal () {
	window.sr = ScrollReveal();

	sr.reveal('.splash .header', {
		duration: 600,
		scale: 1,
		delay: 100,
		useDelay: 'once'
	});
	sr.reveal('.splash .description', {
		duration: 600,
		scale: 1,
		delay: 300,
		useDelay: 'once'
	});


	sr.reveal('.projects .header', {
		reset: true, 
		duration: 600,
		scale: 1,
		delay: 100
	});
	sr.reveal('.projects .project-item', {
		reset: true, 
		duration: 600,
		scale: 1,
		delay: 300
	}, 50);

	//about content
	sr.reveal('.about .content', {
		reset: true, 
		duration: 600,
		scale: 1,
		delay: 200
	});
	sr.reveal('.about .content h1', {
		reset: true, 
		duration: 600,
		scale: 1,
		delay: 500
	});
	sr.reveal('.about .content p', {
		reset: true, 
		duration: 600,
		scale: 1,
		delay: 800
	});
	//or
	/*sr.reveal('.about .reveal-fade', {
		reset: true, 
		duration: 600,
		scale: 1,
		delay: 200
	}, 150);*/
}