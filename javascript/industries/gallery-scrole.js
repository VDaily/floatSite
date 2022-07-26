window.addEventListener("load", function () {
  let arrowLeft = document.querySelector(".gallery-slider__arrow-left");
  let arrowRight = document.querySelector(".gallery-slider__arrow-right");
  let translateXElem = 0;

  if (!arrowLeft && !arrowRight) throw new Error("Не найдены элементы arrow");

  arrowLeft.addEventListener("click", function (event) {
    console.log("left");
  });

  arrowRight.addEventListener("click", function (event) {
    let groupItems = document.querySelector(".gallery-slider__group-items");
    let bigItem = document.querySelector(".gallery-slider__item_size-more");
    let marginRight, widthElement;
    if (!groupItems) return;

    if (!bigItem) return;

    marginRight = parseFloat(
      getComputedStyle(groupItems.children[0]).marginRight
    );
    widthElement = groupItems.children[0].offsetWidth + marginRight;
    console.log(widthElement);
    translateXElem = translateXElem - widthElement;
    console.log(translateXElem);
    groupItems.style.transform = `translateX(${translateXElem + "px"})`;

    let nextElement = bigItem.nextElementSibling;

    bigItem.classList.remove("gallery-slider__item_size-more");
    nextElement.classList.add("gallery-slider__item_size-more");
  });
});
