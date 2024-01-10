import { gsap } from "gsap";

const cards = document.querySelectorAll(".service-card");

if (cards) {
  const cardsArr = gsap.utils.toArray(cards);

  const onMouseLeaveHandler = (evt) => {
    const current = evt.currentTarget;

    current.removeEventListener("mouseleave", onMouseLeaveHandler);
    current.addEventListener("mouseenter", onMouseEnterHandler);
  };

  const onMouseEnterHandler = (evt) => {
    console.log("ENETER");
    const current = evt.currentTarget;

    current.removeEventListener("mouseenter", onMouseEnterHandler);
    current.addEventListener("mouseleave", onMouseLeaveHandler);

    let cardAnimation = gsap.timeline({ paused: true, delay: 0.25 });

    cardAnimation.to(current, {
      scale: 1.02,
      y: -10,
      duration: 0.5,
      zIndex: 100,
      ease: "linear",
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 47px 211px 0px",
    });

    cardAnimation.play();

    const onLeaveHandler = () => {
      cardAnimation.reverse();
      current.removeEventListener("mouseleave", onLeaveHandler);
    };

    current.addEventListener("mouseleave", onLeaveHandler);
  };

  cardsArr.forEach((card) => {
    card.addEventListener("mouseenter", onMouseEnterHandler);
  });
}
