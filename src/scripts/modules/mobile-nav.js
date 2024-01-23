import gsap from "gsap";

let matchMedia = gsap.matchMedia();

const nav = document.querySelector(".main-header .main-nav");
const bodyLocker = (bool) => {
  const body = document.querySelector("body");

  if (bool) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
};

if (nav) {
  const opener = document.querySelector(".burger");
  const closer = nav.querySelector(".main-nav__closer");

  const submenuBtns = nav.querySelectorAll(
    ".main-nav__list-item > .main-nav__next-btn"
  );

  const backBtn = nav.querySelector(".main-nav__back-btn");
  backBtn.addEventListener("click", () => {
    refreshSubMenu();
  });

  const onClickHandler = (evt) => {
    if (evt.target.classList.contains("main-nav__list-item-icon")) {
      const target = evt.target;
      if (
        target.parentNode.nextElementSibling !== null &&
        target.parentNode.nextElementSibling.classList.contains(
          "main-nav__inner-list"
        )
      ) {
        evt.preventDefault();
        openSubmenu(target.parentNode.parentNode);
      }
    }
  };

  const linkIcons = nav.querySelectorAll(".main-nav__list-item > a");
  linkIcons.forEach((item) => {
    item.addEventListener("click", onClickHandler);
  });

  const refreshSubMenu = () => {

    if (nav.querySelector(".main-nav__list-item.opened")) {
      gsap.set(".main-nav__list-item.opened .main-nav__list-item-icon", {
        pointerEvents: "initial",
      });

      gsap.to(".main-header .main-nav .contact-block", {
        opacity: 1,
        duration: 0.6,
        pointerEvents: "initial",
        visibility: "visible",
      });

      gsap.set(".main-nav__list-item.opened", {
        classList: "main-nav__list-item",
        onComplete: () => {
          console.log("TEST");
          gsap.fromTo(
            ".main-nav__back-btn",
            {
              opacity: 1,
            },
            {
              opacity: 0,
              duration: 0.6,
              display: "none",
            }
          );
        },
      });
    }
  };

  const onClickOpenSubmenu = (evt) => {
    const subMenu = evt.currentTarget.parentNode;
    openSubmenu(subMenu);
  };

  const openSubmenu = (sub) => {
    gsap.fromTo(
      sub,
      {
        opacity: 0,
      },
      {
        classList: "main-nav__list-item opened",
        opacity: 1,
        duration: 0.6,
        onComplete: () => {
          gsap.set(".main-nav__list-item.opened .main-nav__list-item-icon", {
            pointerEvents: "none",
          });
        },
      }
    );
    gsap.fromTo(
      ".main-nav__back-btn",
      {
        display: "flex",
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
      }
    );

    gsap.to(".main-header .main-nav .contact-block", {
      opacity: 0,
      duration: 0.6,
      pointerEvents: "none",
      visibility: "hidden",
    });
  };

  submenuBtns.forEach((btn) => {
    btn.addEventListener("click", onClickOpenSubmenu);
  });

  matchMedia.add("(min-width: 768px)", () => {
    if (document.querySelector(".main-header .main-nav.active")) {
      bodyLocker(false);
    }
    gsap.set(".main-header .main-nav", {
      display: "flex",
      opacity: 1,
    });

    refreshSubMenu();
  });

  matchMedia.add("(max-width: 767px)", () => {
    if (document.querySelector(".main-header .main-nav.active")) {
      bodyLocker(true);
    }
    gsap.set(".main-nav__back-btn", {
      display: "none",
      opacity: 0,
    });

    const onClickOpenNavHandler = () => {
      bodyLocker(true);
      nav.classList.add("active");
      opener.removeEventListener("click", onClickOpenNavHandler);
      closer.addEventListener("click", onClickCloseNavHandler);

      gsap.fromTo(
        ".main-header .main-nav",
        {
          opacity: 0,
          display: "flex",
        },
        {
          opacity: 1,
          duration: 0.6,
        }
      );
    };

    const onClickCloseNavHandler = () => {
      closer.removeEventListener("click", onClickCloseNavHandler);

      gsap.to(".main-header .main-nav", {
        opacity: 0,
        duration: 0.6,
        display: "none",
        onComplete: () => {
          nav.classList.remove("active");
          opener.addEventListener("click", onClickOpenNavHandler);
          bodyLocker(false);
        },
      });

      refreshSubMenu();
    };

    opener.addEventListener("click", onClickOpenNavHandler);
  });
}
