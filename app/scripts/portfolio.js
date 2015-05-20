/*global IScroll*/
'use strict';

var myScroll;
var myScroll2;

function loadIt() {
	myScroll = new IScroll('#dvone', {mouseWheel: true});
	myScroll2 = new IScroll('#dvtwo', {mouseWheel: true});
}

function widthIt() {
	
	var ulOneHeight = 0;
	var ulTwoHeight = 0;

	$('#ulone li').each(function() {
		ulOneHeight += parseInt($(this).outerHeight(true), 10);
	});
	
	$('#ultwo li').each(function() {
		ulTwoHeight += parseInt($(this).outerHeight(true), 10);
	});

	var divHeight = Math.max(ulOneHeight, ulTwoHeight);

	$('#ulone, #ultwo').css('height',divHeight);

}


$(document).ready(function() {
	$('#listcolumn, #dvone, #dvtwo').css('height', $(window).height());

	var whatSize = parseInt($(window).width());

		$('.wrapper a').hammer().bind('press click', function(e) {
			e.preventDefault()
		$('img.display').fadeTo(100,0.8);
		$('img.display').attr('src', $(this).find('img').attr('src')).fadeTo(100,1);
		$('#detail p').text($(this).find('img').attr('rel'));
		$('html,body').animate({scrollTop:0});
	});
	
	if (whatSize > 615) {
		loadIt();
	}

			widthIt();

});

$(window).resize(function() {

	var whatSize = parseInt($(window).width());

		myScroll.destroy();
		myScroll2.destroy();
		$(document).removeAttr('style');
		
		if (whatSize>615) {
			loadIt();
		}

});