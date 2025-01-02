// script.js
$(document).ready(function() {
   let today = new Date();
   let currentMonth = today.getMonth();
   let currentYear = today.getFullYear();
   let selectedDate = null;

   const monthNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

   function renderCalendar(month, year) {
       $('#calendar-dates').empty();  // 이전 날짜 지우기
       $('#month-year').text(`${year}년 ${monthNames[month]}월`);

       // 해당 월의 첫 날과 마지막 날 정보
       let firstDay = new Date(year, month, 1).getDay();
       let daysInMonth = 32 - new Date(year, month, 32).getDate();

       // 빈 칸 생성 (첫 주의 앞쪽에 있는 공백)
       for (let i = 0; i < firstDay; i++) {
           $('#calendar-dates').append('<div class="date empty"></div>');  // 빈 칸 표시를 위해 클래스 추가
       }

       // 날짜 생성
       for (let day = 1; day <= daysInMonth; day++) {
           let date = $('<div class="date"></div>').text(day);

           // 오늘 날짜에 색 강조
           if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
               date.addClass('today');
           }

           // 날짜 클릭 시 선택 효과
           date.click(function() {
               if (selectedDate) {
                   selectedDate.removeClass('selected-date');
               }
               date.addClass('selected-date');
               selectedDate = date;
           });

           $('#calendar-dates').append(date);
       }

       // 마지막 주의 빈 칸 생성
       let totalCells = firstDay + daysInMonth;
       let remainingCells = (totalCells % 7 === 0) ? 0 : 7 - (totalCells % 7);

       for (let i = 0; i < remainingCells; i++) {
           $('#calendar-dates').append('<div class="date empty"></div>');
       }
   }

   // 이전, 다음 버튼 클릭 이벤트
   $('#prev').click(function() {
       currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
       currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
       renderCalendar(currentMonth, currentYear);
   });

   $('#next').click(function() {
       currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
       currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
       renderCalendar(currentMonth, currentYear);
   });

   // 달력 초기화
   renderCalendar(currentMonth, currentYear);
});
