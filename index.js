const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: false,
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      checkArrow();
    },
    resize: function () {
      checkArrow();
    }
  }
});

function checkArrow() {
  const swiperPrev = document.querySelector('.swiper-button-prev');
  const swiperNext = document.querySelector('.swiper-button-next');
  if (window.innerWidth >= 1440) {
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
  } else {
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
  }
}