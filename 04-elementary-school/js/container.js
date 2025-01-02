$(function () {
   $(".n-e-b-wrap > div").each(function () {
       let $wrap = $(this);
       
       $wrap.find(".tab-tltle>li").on("click", function () {
           let sNum = $(this).index();
           $(this).addClass("active").siblings().removeClass("active");
           $wrap.find(".tab-list>ul").eq(sNum).addClass("active").siblings().removeClass("active");
       });
   });
});
