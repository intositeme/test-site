$(document).ready(function(){
	$(".button-projects").click(function(event){
		event.preventDefault();
		var goTopPosition = $(".projects").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
	});

	$(".button-home").click(goToSplash);
	$(".button-about").click(goToAbout);
	$(".button-contact").click(goToContact);
});

function goToSplash (event) {
	event.preventDefault();
	var goTopPosition = $(".splash").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}

function goToAbout (event) {
	event.preventDefault();
	var goTopPosition = $(".about").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}
function goToContact (event) {
	event.preventDefault();
	var goTopPosition = $(".contact").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}









