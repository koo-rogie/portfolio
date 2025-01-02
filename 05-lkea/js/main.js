$(document).ready(function () {
   function createSnowflake() {
      const $snowflake = $('<div class="snowflake">❄</div>');
      const startPosX = Math.random() * $(window).width();
      const size = Math.random() * 20 + 10; // 10px ~ 30px 크기
      const duration = Math.random() * 5 + 3; // 3초 ~ 8초 동안 떨어짐
      const endPosX = startPosX + Math.random() * 500 - 50; // 좌우로 약간 흔들림

      $snowflake.css({
         left: startPosX,
         fontSize: size + 'px',
         top: '-50px',
         position: 'absolute',
         opacity: Math.random() + 0.3, // 투명도
      });

      $('.snow-container').append($snowflake);

      $snowflake.animate(
         {
            top: $(window).height() - size + 'px', // 화면 맨 아래로 (크기에 따라 약간 조정)
            left: endPosX + 'px',
            opacity: 1, // 쌓일 때는 투명하지 않게
         },
         {
            duration: duration * 1000,
            easing: 'linear',
            complete: function () {
               // 눈송이를 고정시키고 클래스 추가
               $snowflake.css({
                  position: 'absolute', // 위치를 고정
                  opacity: 1,           // 완전 보이게
               }).addClass('stacked'); // 'stacked' 클래스 추가로 쌓인 눈 구분

               // 10초 후에 쌓인 눈송이 제거
               setTimeout(function () {
                  $snowflake.fadeOut(1000, function () {
                     $(this).remove(); // 요소 제거
                  });
               }, 10000); // 10초 후 실행
            },
         }
      );
   }

   // 300ms 간격으로 눈송이 생성
   setInterval(createSnowflake, 300);
});
