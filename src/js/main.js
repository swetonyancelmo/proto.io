const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#nav');
const buttonIcon = document.querySelector('#button-icon');

let menuAberto = false;

btn.addEventListener('click', () => {
  menuAberto = !menuAberto;
  nav.classList.toggle('active');

  if(menuAberto){
    buttonIcon.classList.remove('fa-bars');
    buttonIcon.classList.add('fa-xmark');
  } else {
    buttonIcon.classList.remove('fa-xmark');
    buttonIcon.classList.add('fa-bars');
  }

});