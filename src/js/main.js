
$(document).ready(function () {
  "use strict";
  let modal = $(".modal"),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $(".modal__close"),
    alertClose = $(".alert__close"),
    alert = $(".alert");

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  alert.on("click", function(e) {
    if(alert.has(e.target).length === 0 || alertClose.is(e.target)) {
      alert.toggleClass("alert--visible");
    }
  });

  modal.on("click", function (e) {
    if (modal.has(e.target).length === 0 || closeBtn.is(e.target)) {
      modal.toggleClass("modal--visible");
    }
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27 && modal.closest(".modal--visible").length) {
      modal.toggleClass("modal--visible");
    } else if (e.keyCode === 27 && alert.closest(".alert--visible").length) {
      alert.toggleClass("alert--visible");
    }
  });

  $(function () {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $(".top").fadeIn();
      } else {
        $(".top").fadeOut();
      }
    });

    $(".top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });

    $(".hero__scroll-down").click(function () {
      $("html, body").animate({ scrollTop: $("#projects").top});
      return false;
    });

    let $page = $("html, body");
    $('a[href="#main"], a[href="#projects"], a[href="#info"]').click(function () {
      $page.animate(
        {scrollTop: $($.attr(this, "href")).offset().top},
        1000
      );
      return false;
    });
  });

  let mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });

  let next = $(".swiper-button-next");
  let prev = $(".swiper-button-prev");
  let bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 20 + bullets.width());
  bullets.css("left", prev.width() + 30);
  bullets.css("top", bullets.height() - 40);

  new WOW().init();
 
  // валидация формы
  // modal form
  $(".modal__form").validate({
    errorClass: "modal__invalid",
    errorElement: "span",
    errorPlacement: function (error, element) {
      if (element.attr("type") === "checkbox") {
        return element.next("label").append(error);
      }
      error.insertAfter($(element));
    },
    // onfocusout: true,
    rules: {
      // правило для поля "введите имя"
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // правило для телефона
      userPhone: {
        required: true,
        minlength: 16,
      },
      // правила для поля "email"
      userEmail: {
        required: true,
        email: true,
      },
      policyCheckbox: {
        required: true,
      },
    },
    // сообщения при ошибках
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      policyCheckbox: {
        required: "Необходимо согласие пользователя",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Сработало!" + response);
          alert.toggleClass("alert--visible");
          $(form)[0].reset();
          modal.removeClass("modal--visible");
          ym(64422688, "reachGoal", "request");
          return true;
        },
        error: function (response) {
          console.log("Ошибка отправки.");
        },
      });
    },
  });

  // footer form
  $(".footer__form").validate({
    errorClass: "footer__invalid",
    errorElement: "span",
    errorPlacement: function (error, element) {
    if (element.attr("type") === "checkbox") {
        return element.next('label').append(error);
    }
     error.insertAfter($(element));
    },
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      userQuestion: {
        required: true,
      },
      footerCheckbox: {
        required: true,
      },
    },
    // сообщения при ошибках
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      userPhone: "Заполните поле",
      userQuestion: {
        required: "Напишите свой вопрос",
      },
      footerCheckbox: {
        required: "Необходимо согласие пользователя",
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Сработало!" + response);
          alert.toggleClass("alert--visible");
          $(form)[0].reset();
        },
        error: function (response) {
          console.log("Ошибка отправки.");
        },
      });
    },
  });
  // control form
  $(".control__form").validate({
    errorClass: "control__invalid",
    errorElement: "span",
    errorPlacement: function (error, element) {
      if (element.attr("type") === "checkbox") {
        return element.next("label").append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // правило для поля "введите имя"
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // правило для телефона
      userPhone: {
        required: true,
        minlength: 16,
      },
      controlCheckbox: {
        required: true,
      },
    },
    // сообщения при ошибках
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      userPhone: "Заполните поле",
      controlCheckbox: {
        required: "Необходимо согласие пользователя",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Сработало!" + response);
          console.dir();
          alert.toggleClass("alert--visible");
          $(form)[0].reset();
        },
        error: function (response) {
          console.log("Ошибка отправки.");
        },
      });
    },
  });
  
  // маска для телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:",
  });

  // youtube video  
  let player;
  function videoPlay(event) {
    event.target.playVideo();
  }

  $(".video-play").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "360",
      width: "100%",
      videoId: "jO_8f9r5s9U",
      events: {
        onReady: videoPlay,
      },
    });
  });
});
