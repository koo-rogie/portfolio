$(function () {
    // 로그아웃 버튼 클릭 시 처리
    $('.logout-list').on('click', function (e) {
        e.preventDefault(); // 기본 동작 막기

        // 로그아웃 메시지 표시
        alert('로그아웃 되었습니다.');

        // 1초 후 index.html로 리디렉션
        setTimeout(function () {
            window.location.href = './index.html';
        }, 1000); // 1000ms = 1초
    });
    
    $('.gnb-s-list').on('click', function (e) {
        e.preventDefault(); // 기본 동작 막기

        // 로그아웃 메시지 표시
        alert('로그아웃 되었습니다.');

        // 1초 후 index.html로 리디렉션
        setTimeout(function () {
            window.location.href = './index.html';
        }, 1000); // 1000ms = 1초
    });
});
