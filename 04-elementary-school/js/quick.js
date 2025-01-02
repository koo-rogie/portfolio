$(function () {
   let wWidth = $(window).innerWidth();
   $(window).on("resize", function () {
      wWidth = $(window).innerWidth();
   });

   $(".quick-title").on("click", function () {
      $(this).find("a").toggleClass("active");
      $(".quick-list").stop().fadeToggle();
   });

   $(".quick-title>a").on({
      "mouseover": function () {
         $(this).find(".text-box").stop().animate({
            opacity: 1,
            right: "110%"
         }, 500);
      },
      "mouseout": function () {
         $(this).find(".text-box").stop().animate({
            opacity: 0,
            right: "0"
         }, 500);
      }
   });
   
   $(".quick-list>li>a").on({
      "mouseover": function () {
         $(this).find(".text-box").stop().animate({
            opacity: 1,
            right: "110%"
         }, 500);
      },
      "mouseout": function () {
         $(this).find(".text-box").stop().animate({
            opacity: 0,
            right: "0"
         }, 500);
      }
   });

});
