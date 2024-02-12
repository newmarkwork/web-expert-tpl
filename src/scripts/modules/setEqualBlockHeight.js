function setEqualBlockHeight(arr) {
  arr.forEach((el) => {
    el.style.minHeight = "initial";
  });

  let max = arr[0].offsetHeight;
  arr.forEach((el) => {
    if (max < el.offsetHeight) {
      max = el.offsetHeight;
    }
  });

  arr.forEach((el) => {
    el.style.minHeight = `${max}px`;
  });
}

const init = (arr) => {
  setEqualBlockHeight(arr);
  window.addEventListener("resize", () => {
    setEqualBlockHeight(arr);
  });
};

const serviceCardPreviewTextBlocks = document.querySelectorAll(
  ".service-card__preview-text"
);

if (serviceCardPreviewTextBlocks.length) {
  init(serviceCardPreviewTextBlocks);
}

const serviceCardStuffBlocks = document.querySelectorAll(
  ".service-card__section--stuff"
);

if (serviceCardStuffBlocks.length) {
  init(serviceCardStuffBlocks);
}
