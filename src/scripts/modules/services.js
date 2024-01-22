import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const cardTogglers = gsap.utils.toArray(".service-card__header-more-btn");

if (cardTogglers) {
  let btns = gsap.utils.toArray(".service-card__header-more-btn");

  const onClickOpenCard = (evt) => {
    const card = evt.currentTarget.closest(".service-card");
    const offsetTop = card.getBoundingClientRect().top + window.scrollY;
    const content = card.querySelector(".service-card__content");

    evt.currentTarget.classList.toggle("active");

    btns.forEach((btn) => {
      if (!btn.classList.contains("active")) {
        btn.querySelector("span").textContent = "Что входит";
        btn.querySelector("img").style.transform = "rotate(0)";
      } else {
        btn.querySelector("span").textContent = "Свернуть";
        btn.querySelector("img").style.transform = "rotate(90deg)";
      }
    });

    content.classList.toggle("collapsed");

    gsap.fromTo(
      content,
      {
        opacity: 0,
        height: 0,
      },
      {
        opacity: 1,
        height: "100%",
        duration: 1,

        ease: "ease-in",
        onComplete: () => {},
      }
    );

    gsap.to(window, {
      duration: 0.4,
      ease: "ease-in",
      scrollTo: { y: offsetTop, offsetY: 150 },
    });
  };

  cardTogglers.forEach((toggler) => {
    toggler.addEventListener("click", onClickOpenCard);
  });
}
