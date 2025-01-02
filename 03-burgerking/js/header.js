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
        }, 500, function () {
            $(this).hide();
        });
    });

    $(".sub-inner>li").on("click", function () {
        sNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".login-certainly").on("click", function () {
        const userConfirmed = confirm("로그인 후 사용가능합니다.\n로그인 하시겠습니까?");
        if (userConfirmed) {
            window.location.href = "./login.html"; // 확인 버튼을 누른 경우 로그인 페이지로 이동
        }
        // 취소 버튼을 누른 경우 아무 동작 없이 기존 화면 유지
    });

})

