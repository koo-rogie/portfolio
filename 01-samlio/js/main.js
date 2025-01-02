$(function () {

    let wWdtih = $(window).innerWidth();
    $(window).on("resize",function(){
        wWdtih = $(window).innerWidth();
        console.log(wWdtih);
    })

    // li의 개수를 저장
    let totalTabs = $('.tab-menu-list > li').length;

    // 처음에는 .num과 .total의 값을 설정
    let currentNum = 0;
    $('.num').text(currentNum + 1);
    $('.total').text(totalTabs);
    let sNum;

    // 탭 메뉴 클릭 시 숫자 변경 및 활성화 상태 관리
    $('.tab-menu-list > li').on('click', function () {
        sNum = $(this).index(); // 클릭된 li의 인덱스를 저장
        currentNum = sNum + 1; // 1부터 시작하도록 조정
        $('.num').text(currentNum); // .num 텍스트를 갱신
        $(this).addClass("active").siblings().removeClass("active"); // 활성화된 탭 관리
        $(".box-recruit>div").eq(sNum).show().siblings().hide(); // 해당 콘텐츠만 보이도록 처리
    });

    // 왼쪽 버튼 클릭 시 숫자 감소, 1 이상만
    $('.left-btn').on('click', function () {
        if (currentNum > 1) {
            currentNum--;
            $('.num').text(currentNum);
            sNum = currentNum - 1; // 인덱스는 0부터 시작하므로
            $('.tab-menu-list > li').eq(sNum).addClass("active").siblings().removeClass("active");
            $(".box-recruit>div").eq(sNum).show().siblings().hide();
        }
    });

    // 오른쪽 버튼 클릭 시 숫자 증가, 최대 탭 메뉴 개수까지
    $('.right-btn').on('click', function () {
        if (currentNum < totalTabs) {
            currentNum++;
            $('.num').text(currentNum);
            sNum = currentNum - 1; // 인덱스는 0부터 시작하므로
            $('.tab-menu-list > li').eq(sNum).addClass("active").siblings().removeClass("active");
            $(".box-recruit>div").eq(sNum).show().siblings().hide();
        }
    });
});
