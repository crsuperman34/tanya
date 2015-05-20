/*global IScroll*/
'use strict';

var myScroll;
var myScroll2;

function loadIt() {
	myScroll = new IScroll('#dvone', {mouseWheel: true});
	myScroll2 = new IScroll('#dvtwo', {mouseWheel: true});
}

$(document).ready(function() {
	
	var whatSize = parseInt($(window).width());
	
	$('.wrapper a').bind("click touchstart", function(e) {
		e.preventDefault();
		$('img.display').fadeTo(100,0.8);
		$('img.display').attr('src', $(this).find('img').attr('src')).fadeTo(100,1);
		$('#detail p').text(function(){
			$(this).find('img').attr('rel');
		});
		$('html,body').animate({scrollTop:0});
	});
	
	if (whatSize > 615) {
		loadIt();
	}

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