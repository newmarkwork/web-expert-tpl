import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".main-header");

if (header) {
  console.log("header");

  ScrollTrigger.create({
    start: "top -70",
    end: "bottom bottom",
    toggleClass: {
      className: "main-header--fix-prepared",
      targets: ".main-header",
    },
  });

  gsap.to(header, {
    scrollTrigger: {
      trigger: ".features",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers: true,
    },

    // position: "sticky",
    // top: 0,

    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(1.5)",
  });

  // ScrollTrigger.create({
  //   start: "top -280",
  //   end: "bottom bottom",
  //   toggleClass: {
  //     className: "main-header--fixed",
  //     targets: ".main-header",
  //   },
  // });
}
