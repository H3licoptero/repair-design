/*
document.addEventListener("DOMContentLoaded", function(event) {
  "use strict";
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle="modal"]');  
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  };
  
  modalBtn.forEach((elem) => {
    elem.addEventListener('click', switchModal);
  });

  modal.addEventListener('click', (event) => {
    let target = event.target;
    if(target.matches('.modal--visible') || target.matches('.modal__close')) {
       modal.classList.toggle("modal--visible");
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.keyCode === 27 && modal.matches('.modal--visible')) {
      modal.classList.toggle("modal--visible");
    }
  });
});
*/

$(document).ready(function () {
  "use strict";
  let modal = $(".modal"),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  modal.on("click", function (e) {
    if (modal.has(e.target).length === 0 || closeBtn.is(e.target)) {
      modal.toggleClass("modal--visible");
    }
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27 && modal.closest(".modal--visible").length) {
      modal.toggleClass("modal--visible");
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
      $("html, body").animate({ scrollTop: $("#projects").height() + 150}, 1000);
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
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          // console.log("Сработало!" + response);
          alert("Форма отправлена!");
          $(form)[0].reset();
          modal.removeClass("modal--visible");
        },
      });
    },
  });

  // footer form
  $(".footer__form").validate({
    errorClass: "footer__invalid",
    errorElement: "span",
    rules: {
      footerName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      footerPhone: {
        required: true,
        minlength: 16,
      },
      footerQuestion: {
        required: true,
      },
    },
    // сообщения при ошибках
    messages: {
      footerName: {
        required: "Заполните поле",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      footerPhone: "Заполните поле",
      footerQuestion: {
        required: "Напишите свой вопрос",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send-3.php",
        data: $(form).serialize(),
        success: function (response) {
          // console.log("Сработало!" + response);
          alert("Форма отправлена!");
          $(form)[0].reset();
        },
      });
    },
  });
  // control form
  $(".control__form").validate({
    errorClass: "control__invalid",
    errorElement: "span",
    rules: {
      // правило для поля "введите имя"
      controlName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // правило для телефона
      controlPhone: {
        required: true,
        minlength: 16,
      },
    },
    // сообщения при ошибках
    messages: {
      controlName: {
        required: "Заполните поле",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      controlPhone: "Заполните поле",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send-2.php",
        data: $(form).serialize(),
        success: function (response) {
          // console.log("Сработало!" + response);
          alert("Форма отправлена!");
          $(form)[0].reset();
        },
      });
    },
  });
  
  // маска для телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:",
  });

  // map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//  ymaps.ready(function () {
//    var myMap = new ymaps.Map(
//        "map",
//        {
//          center: [55.751574, 37.573856],
//          zoom: 9,
//        },
//        {
//          searchControlProvider: "yandex#search",
//        }
//      ),
//      // Создаём макет содержимого.
//      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//      ),
//      myPlacemark = new ymaps.Placemark(
//        myMap.getCenter(),
//        {
//          hintContent: "Собственный значок метки",
//          balloonContent: "Это красивая метка",
//        },
//        {
//          // Опции.
//          // Необходимо указать данный тип макета.
//          iconLayout: "default#image",
//          // Своё изображение иконки метки.
//          iconImageHref: "img/myIcon.gif",
//          // Размеры метки.
//          iconImageSize: [30, 42],
//          // Смещение левого верхнего угла иконки относительно
//          // её "ножки" (точки привязки).
//          iconImageOffset: [-5, -38],
//        }
//      ),
//      myPlacemarkWithContent = new ymaps.Placemark(
//        [55.672368, 37.582757],
//        {
//          hintContent: "Наш офис",
//          balloonContent: "Вход со стороны проспекта",
//          iconContent: "",
//        },
//        {
//          // Опции.
//          // Необходимо указать данный тип макета.
//          iconLayout: "default#imageWithContent",
//          // Своё изображение иконки метки.
//          iconImageHref: "img/pin.png",
//          // Размеры метки.
//          iconImageSize: [48, 48],
//          // Смещение левого верхнего угла иконки относительно
//          // её "ножки" (точки привязки).
//          iconImageOffset: [-24, -24],
//          // Смещение слоя с содержимым относительно слоя с картинкой.
//          iconContentOffset: [15, 15],
//          // Макет содержимого.
//          iconContentLayout: MyIconContentLayout,
//        }
//      );

//    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
//    myMap.behaviors.disable('scrollZoom');
//  });
});
