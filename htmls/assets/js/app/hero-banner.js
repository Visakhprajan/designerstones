var heroSwiper = new Swiper('.hero-slider', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  paginationClickable: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});