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
  ("use strict");
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
  $(".modal__form").validate({
    errorClass: "modal__invalid",
    rules: {
      // правило для поля "введите имя"
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // правило для телефона
      userPhone: "required",
      // правила для поля "email"
      userEmail: {
        required: true,
        email: true,
      },
    },
    // сообщения при ошибках
    messages: {
      userName: {
        required: "Это поле обязательно для ввода",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      userPhone: "Укажите свой номер телефона",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com",
      },
    },
  });
  $(".footer__form").validate({
    errorClass: "footer__invalid",
    rules: {
      footerName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      footerPhone: {
        required: true,
      },
      footerQuestion: {
        required: true,
      },
    },
    // сообщения при ошибках
    messages: {
      footerName: {
        required: "Это поле обязательно для ввода",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      footerPhone: "Укажите свой номер телефона",
      footerQuestion: {
        required: "Напишите свой вопрос",
      },
    },
  });
  $(".control__form").validate({
    errorClass: "control__invalid",
    rules: {
      // правило для поля "введите имя"
      controlName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // правило для телефона
      controlPhone: "required",
    },
    // сообщения при ошибках
    messages: {
      controlName: {
        required: "Это поле обязательно для ввода",
        minlength: "Имя должно содержать не менее 2-х символов",
        maxlength: "Имя должно содержать не более 15-ти символов",
      },
      controlPhone: "Укажите свой номер телефона",
    },
  });
  // маска для телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "+7(___) ___-__-__",
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
