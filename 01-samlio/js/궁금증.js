$(function () {
    // li의 개수를 저장
    let totalTabs = $('.tab-menu-list > li').length;

    // 처음에는 .num과 .total의 값을 설정
    let currentNum = 0;
    $('.num').text(currentNum + 1);
    $('.total').text(totalTabs);
    let sNum
    // 탭 메뉴 클릭 시 숫자 증가
    $('.tab-menu-list > li').on('click', function () {
        currentNum++;
        if (currentNum > totalTabs) {
            currentNum = totalTabs;
        }
        $('.num').text(currentNum);
        sNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".box-recruit>div").eq(sNum).show().siblings().hide();
    });

    // 왼쪽 버튼 클릭 시 숫자 감소, 0 이상만
    $('.left-btn').on('click', function () {
        if (currentNum > 1) {
            currentNum--;
        }
        $('.num').text(currentNum);
    });

    // 오른쪽 버튼 클릭 시 숫자 증가, 최대 탭 메뉴 개수까지
    $('.right-btn').on('click', function () {
        if (currentNum < totalTabs) {
            currentNum++;
        }
        $('.num').text(currentNum);
    });

})