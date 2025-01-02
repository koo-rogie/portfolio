$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })


    let sNum
    $(".nav>li").on({
        "mouseover": function () {
            sNum = $(this).index();
            $(".sub-wrap").eq(sNum).stop().slideDown(500);
        },
        "mouseout": function () {
            sNum = $(this).index();
            $(".sub-wrap").eq(sNum).stop().slideUp(300)
        }
    })
    $(".artist-list>li").on({
        "mouseover": function () {
            sNum = $(this).index();
            $(".artist-img>li").eq(sNum).stop().fadeIn(500);
        },
        "mouseout": function () {
            sNum = $(this).index();
            $(".artist-img>li").eq(sNum).stop().fadeOut(500);

        }
    })

    $(".ham-btn").on("click", function () {
        $(".m-nav").stop().fadeIn(500);
    })

    $(".m-sub-list>li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".close-btn").on("click", function () {
        $(".m-nav").stop().fadeOut(500);
    })
})

