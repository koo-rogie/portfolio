$(function () {

   let wWidth = $(window).innerWidth();

   $(window).on("resize", function () {
      wWidth = $(window).innerWidth();
      console.log(wWidth);
   })


   $(".event-wrap .more-btn").on("click", function () {
      $(".event-list").toggleClass("active");
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
         $(this).find("strong").text("이벤트 접기");
      } else {
         $(this).find("strong").text("이벤트 더보기");
      }
   });


   var isAnimated = false;

   $(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      var frojdaWrapOffset = $(".frojda-wrap").offset().top;

      if (scrollTop + $(window).height() > frojdaWrapOffset && !isAnimated) {
         isAnimated = true; // 애니메이션 실행 중 플래그 설정
         $(".frojda-list").animate({ marginLeft: "0" }, 500, function () {
            isAnimated = false; // 애니메이션 완료 후 플래그 해제
         });
      } else if (scrollTop + $(window).height() <= frojdaWrapOffset && $(".frojda-list").css("margin-left") === "0px") {
         $(".frojda-list").css("margin-left", "200%");
      }
   });

   let sNum
   $(".green-title-list>li").on("click", function () {
      sNum = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $(".green-list>li").eq(sNum).addClass("active").siblings().removeClass("active");
   })

});
