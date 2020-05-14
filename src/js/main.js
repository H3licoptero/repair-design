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
});
