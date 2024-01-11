import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".features", {
  scrollTrigger: {
    trigger: ".hero",
    start: "center center",
    scrub: true,
    // markers: true,
  },

  y: 75,
});
