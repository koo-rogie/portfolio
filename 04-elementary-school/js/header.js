$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
    })

    let sNum;

    $(".nav>li").on({
        "mouseover": function () {
            sNum = $(this).index();
            $(".sub-wrap").eq(sNum).stop().slideDown(1000);
        },
        "mouseout": function () {
            sNum = $(this).index();
            $(".sub-wrap").eq(sNum).stop().slideUp(1000);
        }
    });


    $(".lang-wrap").on("click", function () {
        $(".lang-wrap>a").toggleClass("active");
        $(".lang-wrap>ul").stop().slideToggle(500);
    })

    $(".person-wrap").on("click", function () {
        $(".person-wrap>ul").stop().slideToggle(500);
    })

    $(".ham-btn").on("click", function () {
        $(".m-wrap").stop().animate({
            left: "0"
        }, 500);
    })

    $(".m-nav > li > a").on("click", function (e) {
        e.preventDefault(); // 기본 클릭 이벤트 방지

        let $parentLi = $(this).parent(); // 클릭된 <a>의 부모인 <li> 선택
        let $subMenu = $parentLi.find(".sub"); // 해당 <li>의 .sub 메뉴 선택

        // 이미 활성화된 메뉴를 클릭한 경우 슬라이드 업
        if ($parentLi.hasClass("active")) {
            $subMenu.slideUp(500);
            $parentLi.removeClass("active");
        } else {
            $(".m-nav > li").removeClass("active").find(".sub").slideUp(500); // 모든 메뉴를 닫고
            $parentLi.addClass("active"); // 현재 메뉴에 active 클래스 추가
            $subMenu.slideDown(500); // 현재 메뉴만 슬라이드 다운
        }
    });

    $(".close-btn").on("click", function () {
        $(".m-wrap").stop().animate({
            left: "-100%"
        }, 500);
    });


})