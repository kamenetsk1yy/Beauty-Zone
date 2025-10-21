const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    880: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
  pagination: {
    el: '.pagination-dynamic',
    bulletClass: 'pagination-dynamic__button',
    bulletActiveClass: 'pagination-dynamic__button--active',
  },
  navigation: {
    nextEl: '.carousel.next',
    prevEl: '.carousel.prev',
  },
});
