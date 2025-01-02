$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })
    // 아티스트 소개
    $(".tab-list>li").on({
        "mouseover": function () {
            $(this).find(".text-box").stop().animate({
                opacity: 1
            }, 500)
        },
        "mouseout": function () {
            $(this).find(".text-box").stop().animate({
                opacity: 0
            }, 500)
        }
    })

    // 노래

    //선택한 요소가 누구인지
    let selectNum = 0;
    //큰요소의 너비
    let big = $(".sing-list>li.active").outerHeight();
    console.log(big)
    //작은요소의 너비
    let small = $(".sing-list>li").outerHeight();
    $(".sing-img-list>li").eq(0).find(".big").css("right", 0)
    console.log(small)
    $(".sing-list>li").on("click", function () {
        selectNum = $(this).index();
        console.log(selectNum);
        $(this).siblings().stop().animate({
            hight: small
        }, 500);

        $(this).stop().animate({
            hight: big
        }, 500)
        $(this).addClass("active").siblings().removeClass("active");
        
        $(".sing-img-list>li").eq(selectNum).addClass("active").siblings().removeClass("active");

        $(".sing-img-list>li").eq(selectNum).find(".big").stop().animate({
            right: 0
        }, 500)
        $(".sing-img-list>li").eq(selectNum).siblings().find(".big").stop().animate({
            right: '-100%'
        }, 500)
        // $(".sing-img-list>li").eq(selectNum).stop().animate({
        //     left: 0
        // }, 300)
        // $(".sing-img-list>li").eq(selectNum).siblings().stop().animate({
        //     left: '150%'
        // }, 300)

    })

    // 공지사항
    $(".tab-title>li").on("click", function () {
        let sNum = $(this).index();
        console.log(sNum);
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-list>li").eq(sNum).show().siblings().hide();
    })

    $(".tab-title>li").eq(0).on("click", function () {
        $(".tab-list-1,.tab-list-2,.tab-list-3,.tab-list-4").show();
    })

    $(".tab-title>li").eq(1).on("click", function () {
        $(".tab-list-1").show();
        $(".tab-list-2,.tab-list-3,.tab-list-4").hide();
    })

    $(".tab-title>li").eq(2).on("click", function () {
        $(".tab-list-2").show();
        $(".tab-list-1,.tab-list-3,.tab-list-4").hide();
    })

    $(".tab-title>li").eq(3).on("click", function () {
        $(".tab-list-4").show();
        $(".tab-list-1,.tab-list-2,.tab-list-3").hide();
    })
})