var checkHamburger = false;
$('.hamburger').click(function() {
    if (checkHamburger == false) {
        $(this).addClass("toggle");
        $('.nav-link-custom').click(function() {
            $(this).parent().children('ul').slideToggle();
        });
        // $('body,html').css("overflow-y", "hidden");
        // $('body,html').css("-webkit-overflow-y", "hidden");
        checkHamburger = true;
    } else {
        $(this).removeClass("toggle");
        $('.nav-link-custom').off('click');
        // $('body,html').css("overflow-y", "visible");
        // $('body,html').css("-webkit-overflow-y", "visible");
        checkHamburger = false;
    }
});