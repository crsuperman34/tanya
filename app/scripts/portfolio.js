
function parallax(){
	// detect scroll position
	s = $(window).scrollTop();

	// set opacity for scroll
	if(s>100) {
			$('.detail').css('opacity',0);
	}
	else{
		$('.detail').css('opacity',1);
	}

	// position element's top
	numa = -6.16e1;
	numb = 8.53e-1;
	numc = 2.26e-5;

	$('.detail').css({
    transform: 'translate3d(0,'+Math.round(numa + (numb*s) + numc*Math.pow(s,2))+'px, 0)'
})

	$('.two').css('top',s*.75);
	$('.one').css('top',s*.6);
}//end function

function linkit() {
	if ($(window).width() > 1110) {
		$('a').removeAttr('href');
	}
	else {
		$('a').attr('href','#');
	}
}// end function

// on load
$(document).ready(function() {
	linkit();
});

// on resize
$(window).resize(function() {
	linkit();
});

// on click
$( 'a' ).click(function() {
	$('.detail').css('opacity',1);
});

//on scroll
document.addEventListener('scroll', function() {
    parallax();
});

// This is the magic, this gives me "live" scroll events
document.addEventListener('gesturechange', function() {
	parallax();
});