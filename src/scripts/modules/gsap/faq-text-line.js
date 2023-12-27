import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const labels = document.querySelectorAll('.faq__label');

if(labels) {

  labels.forEach(label => {
    if(label.classList.contains('faq__label--top')) {
      console.log('TOP');

      gsap.to('.faq__label--top', {
          scrollTrigger: {
              trigger: '.faq',
              start: 'top center',
              scrub: true,
              end: '+=3000',
          },

          right: '100vw',
          ease: 'back'
      })
    }

    if(label.classList.contains('faq__label--top')) {
      console.log('TOP');

      gsap.to('.faq__label--bottom', {
          scrollTrigger: {
              trigger: '.faq',
              start: 'bottom bottom',
              scrub: true,
              end: '+=3000',
              markers: true,
          },

          left: '100vw',
          ease: 'back'
      })
    }

    // label.classList.contains('faq__label--bottom') ?

    //   gsap.to(section, {
    //     scrollTrigger: {
    //         trigger: section,
    //         start: 'top top',
    //         scrub: true,
    //         end: '+=500',
    //         markers: true
    //     },

    //     skewY: '8deg'
    //   })

    // : null;
  });
}
