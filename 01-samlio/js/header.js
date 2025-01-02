$(function () {
    $(".ham-btn").on("click", function () {
        $(".m-nav").stop().fadeIn(500);
    })

    $(".close-btn").on("click", function () {
        $(".m-nav").stop().fadeOut(500);
    })

    $(".nav-list>li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

})