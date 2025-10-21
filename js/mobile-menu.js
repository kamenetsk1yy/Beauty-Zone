const mobileMenu = document.querySelector('.mobile-menu');
const btnOpen = document.querySelector('.menu-btn-open'); 
const btnClose = document.querySelector('.menu-btn-close');

btnOpen?.addEventListener('click', e => {
  e.preventDefault();
  mobileMenu?.classList.add('is-open');
  btnClose?.classList.add('is-active');
});

btnClose?.addEventListener('click', e => {
  e.preventDefault();
  mobileMenu?.classList.remove('is-open');
  btnClose?.classList.remove('is-active');
});
