import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Swiper, { FreeMode, Mousewheel, Scrollbar, Navigation } from 'swiper';
Swiper.use([FreeMode, Mousewheel, Scrollbar, Navigation]);

const scrollableSlider = new Swiper(".scrollable-slider", {
  slidesPerView: "auto",
  loop: true,
  // freeMode: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.scrollable-slider-controls .swiper-button-next',
    prevEl: '.scrollable-slider-controls .swiper-button-prev',
  },
});

// const test = document.querySelector('.scrollable-slider .swiper-wrapper');

// console.log(getComputedStyle(test));

// var span = document.querySelector('.scrollable-slider .swiper-wrapper[style]'),
//     actualWidth = window.getComputedStyle(span, null).transform,
//     inlineWidth = span.style.transform;
// console.log(actualWidth, inlineWidth);

// var element = document.querySelector('.scrollable-slider .swiper-wrapper');

// function getTranslateX() {
//   var style = window.getComputedStyle(element);
//   var matrix = new WebKitCSSMatrix(style.transform);
//   console.log('translateX: ', matrix.m41);
// }

// console.log(getTranslateX());

// let currentValue = getTranslateX();
// gsap.fromTo(".box", { opacity: 0 }, { opacity: 0.5, duration: 1 });
gsap.to(".scrollable-slider .swiper-wrapper", {
  scrollTrigger: {
    trigger: ".reviews",
    start: "top center",
    end: "bottom center",
    scrub: .05,
    markers: true,
    onEnter: () => {
      console.log('ENTER');
      scrollableSlider.updateProgress();
    }
  },

  x: -1000
});







