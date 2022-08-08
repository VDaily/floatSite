let arrowLeft = document.querySelector(".gallery-slider__arrow-left");
let arrowRight = document.querySelector(".gallery-slider__arrow-right");
let groupItems = document.querySelector(".gallery-slider__group-items");
let galleryItems = document.querySelectorAll(".gallery-slider__item");
let gallerySlider = document.querySelector(".gallery-slider");
let galleryHeightMax;
let translateXElem = 0;

let index = 0;

if (!arrowLeft && !arrowRight) throw new Error("Не найдены элементы arrow");

arrowLeft.addEventListener(
  "click",
  function (event) {
    let bigItem = document.querySelector(".gallery-slider__item_size-more");
    let previousElement = bigItem.previousElementSibling;

    let marginRight, widthElement;

    if (!groupItems) return;
    if (!bigItem) return;
    marginRight = parseFloat(getComputedStyle(previousElement).marginRight);
    widthElement = previousElement.offsetWidth + marginRight;

    translateXElem = translateXElem + widthElement;

    groupItems.style.transform = `translateX(${translateXElem / 100 + "%"})`;
    previousElement.classList.add("gallery-slider__item_size-more");
    bigItem.classList.remove("gallery-slider__item_size-more");
  },
  { passive: true }
);

arrowRight.addEventListener(
  "click",
  function (event) {
    let bigItem = document.querySelector(".gallery-slider__item_size-more");
    let count = galleryItems.length;
    console.log(count);
    let marginRight, widthElement, nextElement;
    nextElement = bigItem.nextElementSibling;
    console.log(galleryItems);
    if (!groupItems) return;

    if (!bigItem) return;

    marginRight = parseFloat(getComputedStyle(nextElement).marginRight);
    widthElement = nextElement.offsetWidth + marginRight;

    translateXElem = translateXElem - widthElement;

    groupItems.style.transform = `translateX(${translateXElem / 100 + "%"})`;
    nextElement.classList.add("gallery-slider__item_size-more");
    bigItem.classList.remove("gallery-slider__item_size-more");
  },
  { passive: true }
);
class Gallery {}
