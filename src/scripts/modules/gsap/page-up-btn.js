import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const btn = document.querySelector(".page-up-btn");

if (btn) {
  btn.addEventListener("click", () => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  });

  let media = gsap.matchMedia();

  media.add("(min-width: 1024px)", () => {
    gsap.to(btn, {
      scrollTrigger: {
        trigger: ".offer",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },

      width: "185px",
      rotate: 0,
    });
  });
}

gsap.to(btn, {
  scrollTrigger: {
    trigger: ".faq",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  },

  opacity: 1,
  visibility: "visible",
});

// document.addEventListener("mousewheel", (evt) => {
//   console.log(evt);
//   if (evt.wheelDelta >= 0) {
//     // up
//     console.log("up");
//     gsap.to(btn, {
//       duration: 0.5,
//       rotate: 0,
//     });
//   } else {
//     // down
//     console.log("down");
//     gsap.to(btn, {
//       duration: 0.5,
//       rotate: "-180deg",
//     });
//   }
// });
