$(document).ready(function () {
   $('.nav-list > li:eq(0) a').on('click', function (e) {
      e.preventDefault(); // 기본 동작 방지
      $('html, body').animate({
         scrollTop: $('.intoo-wrap').offset().top
      }, 500); // 500ms 동안 스크롤 이동
   });
});