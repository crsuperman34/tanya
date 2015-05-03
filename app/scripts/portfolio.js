var windowsize = $(window).width();

function runStellar() {
    $.stellar({
        responsive: true,
        positionProperty: 'transform',
        horizontalScrolling:false,
        hideDistantElements: false
    });
}

function whatSize() {
    if (windowsize < 527) {
        $('.scroll').attr('data-stellar-ratio', '2');
        $('.left').removeAttr('data-stellar-ratio');
        $('.right').removeAttr('data-stellar-ratio');
        $('.right').removeAttr('style');
        $('.left').removeAttr('style');
        $(runStellar);
    }
    else {
        $('.scroll').removeAttr('data-stellar-ratio');
        $('.scroll').removeAttr('style');
        $('.left').attr('data-stellar-ratio', '2.5');
        $('.right').attr('data-stellar-ratio', '2');
        $(runStellar);
    }
}

function scrolltoTop() {

    $('.scroll a').click(function(){
        if ($('.content').width() < 1000) {
            $('html,body').animate({scrollTop:0});
        }http://localhost:9000/portfolio.html

        $('img.display').attr('src', $(this).find('img').attr('src'));
        $('.detail p').text($(this).find('img').attr('rel'));
    });
}


$(window).resize(function() {
    windowsize = $(window).width();
    scrolltoTop();    
    whatSize();
});

$(document).ready(function() {
    scrolltoTop();
    whatSize();
});
