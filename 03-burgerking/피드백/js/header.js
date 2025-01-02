$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })


    let sNum
    $(".nav>li").on("mouseover", function () {
        $(".sub-wrap").stop().slideDown(500);
    })
    $("header").on("mouseleave", function () {
        if (wWidth > 1279) {
            $(".sub-wrap").stop().slideUp(500);
        }
    })

    $(".ham-btn").on("click", function () {
        $(".sub-wrap").show().stop().animate({
            left: 0
        }, 500);
    });

    $(".close-btn").on("click", function () {
        $(".sub-wrap").stop().animate({
            left: "-100%"
        }, 300, function () {
            $(this).hide();
        });
    });

    $(".sub-inner>li").on("click", function () {
        sNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
    })
})

