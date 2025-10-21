const modal = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal');
const modalBtnOpens = document.querySelectorAll('.modal-btn-open');
const modalBtnCloses = document.querySelectorAll('.modal-btn-close');

const openModal = () => modal.classList.remove('is-hidden');
const closeModal = () => modal.classList.add('is-hidden');

modalBtnOpens.forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault(); // <a href="#">
    openModal();
  }),
);

modalBtnCloses.forEach(btn => btn.addEventListener('click', closeModal));

// клик по фону
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// клики внутри окна не всплывают
modalWindow.addEventListener('click', e => e.stopPropagation());

// закрытие по Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) closeModal();
});