import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

console.log(gsap);

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


// const sections = gsap.utils.toArray('.skew-section');

// sections.forEach((section) => {

//   gsap.to(section, {
//     scrollTrigger: {
//         trigger: section,
//         start: 'top top',
//         scrub: true,
//         end: '+=500',
//         markers: true
//     },

//     skewY: '8deg'
// });

// })
// top+=100
// end: () => `+=${elem.offsetHeight}` // will be updated

gsap.to('.features', {
    scrollTrigger: {
        trigger: '.features',
        start: 'top top+=100',
        scrub: true,
        markers: true
    },

    y: 75
});


gsap.to('.hero', {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    markers: true,
    onEnter: () => {
      console.log('ENTER');
    }
  },

  skewY: '8deg'
})

gsap.to('.hero__content', {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    end: "+=1500",
    // end: "bottom center",
    scrub: 1,
    markers: true,
    onEnter: () => {
      console.log('ENTER');
    }
  },

  skewY: '-8deg'
})

