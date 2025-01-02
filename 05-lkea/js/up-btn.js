$(function () {

   $(".up-btn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000); // 부드러운 스크롤
   });

   // 맨 아래로 이동
   $(".down-btn").on("click", function () {
      const documentHeight = $(document).height(); // 문서 전체 높이
      const windowHeight = $(window).height(); // 창 높이
      $("html, body").animate({ scrollTop: documentHeight - windowHeight }, 1000); // 부드러운 스크롤
   });
})

