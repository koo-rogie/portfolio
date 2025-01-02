$(function () {
    let wWdtih = $(window).innerWidth();
    $(window).on("resize", function () {
        wWdtih = $(window).innerWidth();
    })
    $(".tap-title>li").on("click",function(){
        let sNum = $(this).index()
        $(this).addClass("active").siblings().removeClass("active");
        $(".tap-text>li").eq(sNum).addClass("active").siblings().removeClass("active");
    })
})