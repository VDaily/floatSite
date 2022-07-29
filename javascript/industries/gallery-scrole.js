window.addEventListener("load", function () {
  let arrowLeft = document.querySelector(".gallery-slider__arrow-left");
  let arrowRight = document.querySelector(".gallery-slider__arrow-right");
  let groupItems = document.querySelector(".gallery-slider__group-items");
  let galleryItems = document.querySelectorAll(".gallery-slider__item");
  let translateXElem = 0;
  let index = 0;

  if (!arrowLeft && !arrowRight) throw new Error("Не найдены элементы arrow");

  arrowLeft.addEventListener("click", function (event) {
    let bigItem = document.querySelector(".gallery-slider__item_size-more");
    let previousElement = bigItem.previousElementSibling;
    let marginRight, widthElement;

    if (!groupItems) return;
    if (!bigItem) return;

    marginRight = parseFloat(getComputedStyle(previousElement).marginRight);
    widthElement = previousElement.offsetWidth + marginRight;
    console.log(widthElement);
    console.log(previousElement.offsetWidth, marginRight, widthElement);
    translateXElem = translateXElem + widthElement;
    groupItems.style.transform = `translateX(${translateXElem + "px"})`;

    previousElement.classList.add("gallery-slider__item_size-more");
    bigItem.classList.remove("gallery-slider__item_size-more");
  });

  arrowRight.addEventListener("click", function (event) {
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
    console.log(widthElement);
    console.log(nextElement.offsetWidth, marginRight, widthElement);
    translateXElem = translateXElem - widthElement;
    console.log(translateXElem);

    groupItems.style.transform = `translateX(${translateXElem + "px"})`;
    nextElement.classList.add("gallery-slider__item_size-more");
    bigItem.classList.remove("gallery-slider__item_size-more");
  });
});

class Gallery {}
