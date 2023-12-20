import Swiper, { FreeMode, Mousewheel, Scrollbar, Navigation } from 'swiper';
Swiper.use([FreeMode, Mousewheel, Scrollbar, Navigation]);

const swiper = new Swiper('.swiper-container', {
  slideToClickedSlide: true,
  slidePerView: "auto",

  freeMode: {
    enabled: false,
    sticky: false,
    momentumBounce: false,
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  //   dragSize: 100,
  // },
  mousewheel: {
    enabled: true,
    sensitivity: 4,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
