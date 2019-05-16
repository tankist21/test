$(document).ready(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"] ').click(function() {
        $('.overlay').fadeIn(2000);
        $('.modal').slideDown(2000);
    });
    $('.close').click(function() {
        $('.overlay').fadeOut(2000);
        $('.modal').slideUp(2000);

    });

});