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

    if (!groupItems) return;
    let marginRight, widthElement, heightElement;
    if (!bigItem) return;

    marginRight = parseFloat(
      getComputedStyle(groupItems.children[0]).marginRight
    );
    widthElement = groupItems.children[0].offsetWidth + marginRight;
    heightElement = groupItems.children[0].offsetHeight;
    translateXElem = translateXElem - widthElement;

    console.log(translateXElem);
    groupItems.style.transform = `translateX(${translateXElem + "px"})`;
    groupItems.style.tranfform = `translateY9(${heightElement + "px"})`;
    let nextElement = bigItem.nextElementSibling;

    nextElement.style.width = translateXElem + "px";
    // nextElement.style.transition = `width 2s linear, margin-top 2s linear`;

    nextElement.classList.add("gallery-slider__item_size-more");
    bigItem.classList.remove("gallery-slider__item_size-more");
  });
});
