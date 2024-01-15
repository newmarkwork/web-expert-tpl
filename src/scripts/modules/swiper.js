import Swiper, { FreeMode, Mousewheel, Scrollbar, Navigation } from "swiper";
Swiper.use([FreeMode, Mousewheel, Scrollbar, Navigation]);

const scrollableSlider = new Swiper(".scrollable-slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 15,

  navigation: {
    nextEl: ".scrollable-slider-controls .swiper-button-next",
    prevEl: ".scrollable-slider-controls .swiper-button-prev",
  },

  breakpoints: {
    535: {
      spaceBetween: 30,
    },
  },
});
