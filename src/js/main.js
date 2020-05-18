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

$(document).ready(function() {
  "use strict";
  let modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
      modal.toggleClass('modal--visible');
    });

    closeBtn.on('click', function() {
      modal.toggleClass('modal--visible');
    });

});

let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});