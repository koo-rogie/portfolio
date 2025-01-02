$(function () {
   $(".lang>a").on("click", function () {
      console.log(this);
      $(".lang>ul").stop().slideToggle(500);
   })
})