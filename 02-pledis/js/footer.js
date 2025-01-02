$(function () {
    let wWidth = $(window).innerWidth();
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
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