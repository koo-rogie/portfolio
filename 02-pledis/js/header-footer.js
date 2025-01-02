$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })

    // 해더
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
        $(".sub-bg").show();
    })

    // 푸터
    $(".family-list").on("click", function () {
        $(".family-sub").stop().fadeToggle(500);
        $(".family-list>li>a").toggleClass("active");
    })
})