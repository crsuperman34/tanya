
function IscrollIt() {

	if (parseInt($('#content').css('width')) < 615 ) {

	}
	else {
		var myScroll = new IScroll('#dvone', {
		    mouseWheel: true
		  });

		var myScroll2 = new IScroll('#dvtwo', {
		    mouseWheel: true
		  });
	}
}

$(window).resize(function() {
    windowsize = $(window).width();
    IscrollIt();
});

$(document).ready(function() {
    IscrollIt();

		$('.wrapper a').click(function(e) {
	    e.preventDefault();
	    $('img.display').fadeTo(100,0.8);
			$('img.display').attr('src', $(this).find('img').attr('src')).fadeTo(100,1);
			$('#detail p').text($(this).find('img').attr('rel'));
			$('html,body').animate({scrollTop:0});
		});
});