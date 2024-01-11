import { gsap } from "gsap";

const sections = gsap.utils.toArray(
  ".sticky-side-section .sticky-side-section-target"
);

if (sections) {
  console.log(sections);

  sections.forEach((section) => {
    gsap.to(sections, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: 500,

        markers: true,
        ease: "linear",
      },

      y: "100%",
      duration: 2,
    });
  });
}
