const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2.2,
      spaceBetween: 60,
    },
    1080: {
        slidesPerView: 3.2,
        spaceBetween: 80,
    },
    1440: {
        slidesPerView: 3.6,
        spaceBetween: 100,
    },
  },
});

const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 60,
    },
    680: {
      slidesPerView: 2.2,
      spaceBetween: 100,
    },
    1080: {
        slidesPerView: 3.2,
        spaceBetween: 120,
    },
    1440: {
        slidesPerView: 3.6,
        spaceBetween: 140,
    },
  },
});

sliderMain.controller.control = sliderBg
