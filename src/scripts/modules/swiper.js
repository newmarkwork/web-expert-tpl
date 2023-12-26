import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Observer} from 'gsap/Observer';
gsap.registerPlugin(ScrollTrigger, Observer);

import Swiper, { FreeMode, Mousewheel, Scrollbar, Navigation } from 'swiper';
Swiper.use([FreeMode, Mousewheel, Scrollbar, Navigation]);

let arr = null;

const scrollableSlider = new Swiper(".scrollable-slider", {
  slidesPerView: "auto",
  loop: true,
  // freeMode: true,
  spaceBetween: 30,
  observer: true,

  navigation: {
    nextEl: '.scrollable-slider-controls .swiper-button-next',
    prevEl: '.scrollable-slider-controls .swiper-button-prev',
  },

  // on: {
  //   onSlideChangeBefore: (evt) => {
  //     console.log('BEFORE')
  //   },

  //   onSlideChangeEnd: (evt) => {
  //     console.log('END')
  //   }
  // }

});


scrollableSlider.on('click', () => {

  // console.log(arr[1]);
  scrollableSlider.slideTo(arr[1]);
});

scrollableSlider.on('slideChange', function () {
  console.log('*** mySwiper.realIndex', scrollableSlider.realIndex);
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

    // markers: true,
    onEnter: () => {
      console.log('ENTER');
      // scrollableSlider.updateProgress();
      // scrollableSlider.updateSlides()
      // scrollableSlider.update();
    }
  },

  x: -1000
});

const lazyImages = document.querySelectorAll('.swiper-slide');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.dataset.in = true;
      // arr = document.querySelectorAll('[data-in=true]');
      // scrollableSlider.updateSlidesClasses();
      // scrollableSlider.updateProgress();
      // scrollableSlider.updateSlides();
    } else {
      entry.target.dataset.in = false;
    }
  })
}

const options = {
  // root: по умолчанию window, но можно задать любой элемент-контейнер
  rootMargin: '0px 0px 75px 0px',
  threshold: 0,
}

const observer = new IntersectionObserver(callback, options)

lazyImages.forEach((image) => observer.observe(image))
