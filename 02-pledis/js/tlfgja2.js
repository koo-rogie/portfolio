$(function () {
    $(".m-sub-list>li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})