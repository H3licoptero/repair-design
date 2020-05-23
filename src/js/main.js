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

  modal.on("click", function(e) {
    if(modal.has(e.target).length === 0 || closeBtn.is(e.target)) {
      modal.toggleClass("modal--visible");
    }
  });

  $(document).keydown(function(e) {
    if(e.keyCode === 27 && modal.closest(".modal--visible").length) {
      modal.toggleClass("modal--visible");
    }
  });

  $(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300) {
        $('.top').fadeIn();
      } else {
        $('.top').fadeOut();
      }
    });
  
    $('.top').click(function(){
      $('html, body').animate({scrollTop: 0}, 1000);
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
});