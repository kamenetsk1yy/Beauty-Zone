const modal = document.querySelector('.backdrop');
const modalBtnOpens = document.querySelectorAll('.modal-btn-open');
const modalBtnCloses = document.querySelectorAll('.modal-btn-close');

const openModal = () => modal.classList.remove('is-hidden');
const closeModal = () => modal.classList.add('is-hidden');


modalBtnOpens.forEach(btn => btn.addEventListener('click', event => {
  event.preventDefault();
  openModal();
}));

modalBtnCloses.forEach(btn => btn.addEventListener('click', closeModal));
