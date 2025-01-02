$(function () {



   $(window).on('scroll', function () {
      let scrollTop = $(this).scrollTop(); // 현재 스크롤 위치
      let triggerHeight = 500; // 특정 위치 (300px)

      if (scrollTop >= triggerHeight) {
         $('.header-wrap').css('background-color', '#ffffff'); // 배경색 하얀색으로 유지
         $('.header-wrap').css('box-shadow', '2px 4px 9px rgba(0, 0, 0, 0.1)'); // 배경색 하얀색으로 유지
      } else {
         $('.header-wrap').css('background-color', ''); // 원래 상태로 복귀
         $('.header-wrap').css('box-shadow', ''); // 원래 상태로 복귀
      }
   });

   // 검색버튼 클릭시
   $(".search-list>li").each(function (index) {
      // index는 0부터 시작하므로 1을 더해 표시
      $(this).find(".search-num").text(index + 1);
   });
   $(".search-btn").on("click", function () {
      $(".search-wrap").stop().animate({
         top: 0
      }, 500);
   })
   $(".close-s-btn").on("click", function () {
      $(".search-wrap").stop().animate({
         top: "-1000%"
      }, 500);
   })

   //서브 메뉴 클릭시
   $(".ham-btn").on("click", function () {
      $(".sub-wrap").stop().animate({
         left: 0
      }, 1000);
   })
   $(".close-sub-btn").on("click", function () {
      $(".sub-wrap").stop().animate({
         left: "-110%"
      }, 1000);
      $(".sub-inner").removeClass('active');
      $('.sub-text-list').removeClass('active');
      $('.sub-title-list > li').removeClass('active');
   })
   $('.sub-title-list > li').on('click', function () {
      $(this).addClass("active").siblings().removeClass("active");

      let index = $(this).index();
      $('.sub-text-list').removeClass('active');
      $('.sub-text-list').eq(index).addClass('active');
      $(".sub-inner").addClass('active');
   });

   // 언어 버튼 클릭시
   $(".lang-list>li").on("click", function () {
      $(".lang-sub").stop().slideToggle(500);
   })

   // 사람 모양
   $(".person-list").on("click", function () {
      $(".person-sub").stop().slideToggle(500);
   })
});
