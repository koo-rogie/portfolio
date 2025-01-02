$(document).ready(function () {
    let today = new Date(),
        currentMonth = today.getMonth(),
        currentYear = today.getFullYear(),
        selectedDate = null,
        monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    const renderCalendar = (month, year) => {
        $('#calendar-dates').empty();
        $('#month-year').text(`${year}년 ${monthNames[month]}`);
        updateButtonText(month, year);

        const firstDay = new Date(year, month, 1).getDay(),
            daysInMonth = 32 - new Date(year, month, 32).getDate();

        $('#calendar-dates').append('<div class="date empty"></div>'.repeat(firstDay));

        for (let day = 1; day <= daysInMonth; day++) {
            let date = $(`<div class="date">${day}</div>`).toggleClass('today', day === today.getDate() && month === today.getMonth() && year === today.getFullYear());

            date.click(function () {
                if (selectedDate) selectedDate.removeClass('selected-date');
                $(this).addClass('selected-date');
                selectedDate = $(this);
            
                let clickedDate = new Date(year, month, day),
                    dayOfWeek = clickedDate.getDay();
            
                $('.img-list > li').removeClass('active');
            
                if (dayOfWeek === 0 || dayOfWeek === 6) { // 일요일(0) 또는 토요일(6)
                    $('.img-list > li.last-day').addClass('active');
                    $('.img-list > li.last-day .img-box span').html(`<span>오늘은 학교 쉬는 날! <br> 급식이 없습니다 ㅠㅁㅠ</span>`);
                } else if (clickedDate.toDateString() === today.toDateString()) {
                    $('.img-list > li').eq(0).addClass('active');
                    $('.img-list > li').eq(0).find('.img-box span').html(`<img src="./images/02-container/02-meals/img_61ccd991-ff1f-4db9-9ced-1eb0cd3257681730772702570.jpg" alt="오늘의 급식 이미지">`);
                } else {
                    let targetLi = $('.img-list > li').eq(day % $('.img-list > li').length);
                    targetLi.addClass('active');
            
                    if (clickedDate < today) {
                        // 과거 날짜일 경우 추가 문구 표시
                        targetLi.find('.img-box span').html(`<span> 지난 급식 사진을 보려면 아래 버튼을 클릭해주세요 <br> <a href="#void">더보기</a></span>`);
                    } else {
                        // 미래 날짜일 경우 기본 문구 표시
                        targetLi.find('.img-box span').html(`<span> 사진은 ${year}-${month + 1}-${day} 오전에 업데이트 됩니다!</span>`);
                    }
                }
            });
            

            $('#calendar-dates').append(date);
        }

        $('#calendar-dates').append('<div class="date empty"></div>'.repeat((firstDay + daysInMonth) % 7 ? 7 - ((firstDay + daysInMonth) % 7) : 0));
    };

    const updateButtonText = (month) => {
        $('#prev').text(monthNames[(month === 0 ? 11 : month - 1)]);
        $('#next').text(monthNames[(month === 11 ? 0 : month + 1)]);
        $('#today').text(`${monthNames[today.getMonth()]} ${today.getDate()}일`);
    };

    $('#prev').click(() => renderCalendar(currentMonth = currentMonth === 0 ? 11 : currentMonth - 1, currentYear = currentMonth === 11 ? currentYear - 1 : currentYear));
    $('#next').click(() => renderCalendar(currentMonth = currentMonth === 11 ? 0 : currentMonth + 1, currentYear = currentMonth === 0 ? currentYear + 1 : currentYear));
    $('#today').click(() => renderCalendar(currentMonth = today.getMonth(), currentYear = today.getFullYear()));

    renderCalendar(currentMonth, currentYear);
});
