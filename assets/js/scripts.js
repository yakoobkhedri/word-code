
// swiper

var portfolio = new Swiper(".portfolio", {
  grid: {
    fill: 'row',
    rows: 2
  },
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1.5,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
    pagination: {
    el: ".swiper-pagination",
  },
});
var customer = new Swiper(".customer", {
  spaceBetween: 16,
  slidesPerView: 2,
  breakpoints: {
    1200: {
      slidesPerView: 8,
    },
    992: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
    },
       576: {
      slidesPerView: 4,
    },
       400: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var blog = new Swiper(".blog", {
  spaceBetween: 24,
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
       576: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var testimonial = new Swiper(".testimonial", {
  spaceBetween: 24,
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
    pagination: {
    el: ".swiper-pagination",
  },
});