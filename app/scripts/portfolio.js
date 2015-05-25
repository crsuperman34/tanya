/*global IScroll*/
'use strict';
var myScroll;
var myScroll2;

function loaded () {
	myScroll2 = new IScroll('#dvtwo', { mouseWheel: true, tap:true });
	myScroll = new IScroll('#dvone', { mouseWheel: true, tap:true });
}

/*
var whatSizeVar = 0;

function whatSize() {
	whatSizeVar = 0;
	whatSizeVar += parseInt($(window).width());
}
*/

/*
var ulOneHeight = 0;
var ulTwoHeight = 0;
var divHeight = 0;

function widthIt() {
	
	ulOneHeight = 0;
	ulTwoHeight = 0;
	divHeight = 0;
	var minus = $('#ultwo li').height();
	
	$('#ulone li').each(function() {
		ulOneHeight += parseInt($(this).outerHeight(true), 10);
	});
	
	$('#ultwo li').each(function() {
		
		ulTwoHeight += parseInt($(this).outerHeight(true), 10);
	});
		whatSize();
		divHeight = ulOneHeight + ulTwoHeight;
}

function determine() {

		whatSize();
		widthIt();
		
		if (whatSize>615) {
			$('#listcolumn').css('height', $(window).height());
		}
		else {
			$('#listcolumn').css('height', divHeight);
		}
}
*/
$(document).ready(function() {

	loaded();
	
	$('.wrapper a').on('tap', function(e) {
			e.preventDefault();
		$('img.display').fadeTo(100,0.8);
		$('img.display').attr('src', 
			
	$(this).find('img').attr('src').replace("sm", "transparent").replace("SmSq", "")

			).fadeTo(100,1);
		
		$('#detail p').text($(this).find('img').attr('rel'));
		$('html,body').animate({scrollTop:220});
	});

	// determine();

});
/*
var res;
window.onresize=function() {
    if (res){clearTimeout(res)};
    res = setTimeout(function(){
    
    	console.log("resize triggered");

    },100);
};
*/
