$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })
    let show
    $(".tab-title-list>li").on("click", function () {
        show = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-text-list>li").eq(show).addClass("active").siblings().removeClass("active");
    })

    $(".news-list>li").on({
        "mouseover": function () {
            show = $(this).index();
            $(".hover-wrap").eq(show).stop().fadeIn(500);
        },
        "mouseout": function () {
            show = $(this).index();
            $(".hover-wrap").eq(show).stop().fadeOut(500);
        }
    })
})