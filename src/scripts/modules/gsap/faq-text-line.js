import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.to('.faq__label--top', {
    scrollTrigger: {
        trigger: '.faq',
        start: 'top center',
        scrub: true,
        end: '+=3000',
    },

    right: '100vw',
})

gsap.to('.faq__label--bottom', {
    scrollTrigger: {
        trigger: '.faq',
        start: 'bottom bottom',
        scrub: true,
        end: '+=3000',
        markers: true,
    },

    left: '100vw', // x ????
})
