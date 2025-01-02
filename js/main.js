$(document).ready(function () {
   let currentScreen = 0; // 현재 화면 인덱스
   const screens = $(".screen");
   const totalScreens = screens.length;
   let isScrollEnabled = true; // 스크롤 활성화 여부

   // 스크롤 이벤트 핸들러
   $(window).on("wheel", function (event) {
      if (!isScrollEnabled) return; // 스크롤 비활성화 상태라면 종료

      if ($("html, body").is(":animated")) return; // 애니메이션 중이면 중복 실행 방지

      if (event.originalEvent.deltaY > 0) {
         // 아래로 스크롤
         currentScreen = Math.min(currentScreen + 1, totalScreens - 1);
      } else {
         // 위로 스크롤
         currentScreen = Math.max(currentScreen - 1, 0);
      }

      // 스크롤 이동
      $("html, body").animate(
         {
            scrollTop: $(screens[currentScreen]).offset().top,
         },
         500 // 0.5초 동안 부드럽게 이동
      );
   });

   // 창 크기 변경 시 스크롤 활성화/비활성화 판단
   function checkScrollStatus() {
      if ($(window).width() <= 767) {
         isScrollEnabled = false; // 767px 이하에서는 스크롤 비활성화
      } else {
         isScrollEnabled = true; // 768px 이상에서는 스크롤 활성화
      }
   }

   // 초기 체크 및 창 크기 변경 시 이벤트 등록
   checkScrollStatus();
   $(window).on("resize", checkScrollStatus);
});
