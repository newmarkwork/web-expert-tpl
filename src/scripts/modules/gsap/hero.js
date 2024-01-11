import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top+=100",
    end: "bottom center",
    scrub: 1,
    // markers: true,
  },

  skewY: "10deg",
  scale: 0.985,
});

gsap.to(".hero__content", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top+=100",
    end: "bottom center",
    scrub: 1,
  },

  skewY: "-10deg",
  scale: 0.985,
});
