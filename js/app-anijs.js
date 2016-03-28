$( document ).ready(function() { 
	console.log("ani js test");
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
}