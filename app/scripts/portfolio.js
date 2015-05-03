$(window).scroll(function(e){
	parallax();
});

function parallax(){
	s = $(window).scrollTop();
		
	numa = -6.16e1;
	numb = 8.53e-1;
	numc = 2.26e-5;

	$('.detail').css('top',
			numa + (numb*s) + numc*Math.pow(s,2)
	);
	$('.detail').css('opactiy',100-s/100);


	$('.two').css('top',s*.75);
	$('.one').css('top',s*.6);
}

$(document).ready( function() {
	$('a').click(function() {
		$('.detail').fadeIn();
	});
});
