$(function () {
   const $username = $(".username");
   const $password = $(".password");
   const $checkbox = $(".options input[type='checkbox']");
   const $loginBtn = $(".login-btn");
   const $clearBtn = $(".toggle-password-X");
   const savedUsername = localStorage.getItem("savedUsername");

   // 페이지 로드 시 저장된 아이디 자동 입력
   if (savedUsername) {
      $username.val(savedUsername);
      $checkbox.prop("checked", true).addClass("active");
   }

   // 아이디 저장/삭제 처리 + active 클래스 토글
   $(".options > label").on("click", function () {
      const username = $username.val();
      const checked = $(this).find("input").prop("checked");

      $(this).find("input").toggleClass("active", checked);
      checked && username
         ? localStorage.setItem("savedUsername", username)
         : localStorage.removeItem("savedUsername");
   });

   // 입력 필드와 X 버튼 동작
   $(".username, .password").on("input focus", function () {
      $(this).closest(".input-group").find($clearBtn).toggleClass("hidden", !$(this).val());
   }).on("blur", function () {
      setTimeout(() => $(this).closest(".input-group").find($clearBtn).addClass("hidden"), 200);
   });

   $clearBtn.on("click", function () {
      $(this).closest(".input-group").find("input").val("").focus();
      $(this).addClass("hidden");
   });

   // 비밀번호 보기/숨기기 토글
   $(".toggle-password-eye").on("click", function () {
      const type = $password.attr("type") === "password" ? "text" : "password";
      $password.attr("type", type);
      $(this).toggleClass("active");
   });

   // 로그인 버튼 유효성 검사
   $loginBtn.on("click", function (e) {
      e.preventDefault();
      const username = $username.val();
      const password = $password.val();

      if (!username || !password) return alert("아이디와 비밀번호를 입력해주세요.");
      window.location.href = "./index-login.html";
   });

   // 소셜 로그인 및 회원가입 버튼 기본 동작 방지
   $(".social-login > button, .signup-btn").on("click", e => e.preventDefault());

   // IME 입력 조합 감지 및 유효성 검사
   document.addEventListener("DOMContentLoaded", function () {
      const validateInput = input => {
         input.value = input.value.replace(/[^A-Za-z0-9]/g, '');
      };

      ["compositionend", "input"].forEach(event => {
         $username.add($password).on(event, function () {
            if (!this.isComposing) validateInput(this);
         }).on("compositionstart", () => (this.isComposing = true));
      });
   });
});
