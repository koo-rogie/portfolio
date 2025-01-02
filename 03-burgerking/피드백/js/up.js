$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1500) {
            $('.up-btn').stop().fadeIn(500);
        } 
        else {
            $('.up-btn').stop().fadeOut(500);
        }
    });



    $(".up-btn").on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, '300');
    })
})