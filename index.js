const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});