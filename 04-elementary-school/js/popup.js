$(document).ready(function () {
    // 오늘 날짜를 문자열로 가져오기 (예: "2024-10-29")
    const today = new Date().toISOString().split('T')[0];

    // LocalStorage에서 'hidePopup' 값 확인
    if (localStorage.getItem('hidePopup') === today) {
        $('.popup-wrap').hide(); // 이미 오늘 하루 보지 않기로 한 경우 팝업 숨기기
    } else {
        $('.popup-wrap').show(); // 팝업 표시
    }

    // '닫기 X' 버튼 클릭 시 팝업 숨기기
    $('.close-btn a').click(function (e) {
        e.preventDefault();
        $('.popup-wrap').hide();
    });

    // '오늘 하루 보지 않기' 버튼 클릭 시 처리
    $('.close-Today-btn a').click(function (e) {
        e.preventDefault();
        localStorage.setItem('hidePopup', today); // 오늘 날짜 저장
        $('.popup-wrap').hide(); // 팝업 숨기기
    });
});
