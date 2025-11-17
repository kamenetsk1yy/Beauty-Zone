const mobileMenu = document.querySelector('.mobile-menu');
const btnOpen = document.querySelector('.menu-btn-open');
const btnClose = document.querySelector('.menu-btn-close');

const openMenu = e => {
  e?.preventDefault?.();
  mobileMenu?.classList.add('is-open');
  btnClose?.classList.add('is-active');
};

const closeMenu = e => {
  // Do not prevent default for links so navigation/scroll works
  if (e?.type === 'click' && e?.target?.tagName?.toLowerCase() === 'a') {
    // allow default
  }
  mobileMenu?.classList.remove('is-open');
  btnClose?.classList.remove('is-active');
};

btnOpen?.addEventListener('click', openMenu);
btnClose?.addEventListener('click', e => {
  e.preventDefault();
  closeMenu();
});

// Close mobile menu when any link inside it is clicked
mobileMenu?.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;
  // do not block navigation; just close the menu
  closeMenu(e);
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
    closeMenu();
  }
});
