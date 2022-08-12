let sizes = {
  xxs: 0,
  xs: 319.98,
  sm: 575.98,
  md: 767.98,
  lg: 991.98,
  xl: 1199.98,
  xxl: 1399.98,
};

let arrSizes = sortSizes(sizes);

// Переводим объект в массив и сортируем его по возрастанию.
function sortSizes(sizes) {
  return Object.entries(sizes).sort((a, b) => {
    return a[1] - b[1];
  });
}
// function getCurrentSize(arrSizes, widthHTML) {
//   arrSizes.forEach((elem, index) => {
//     if (!arrSizes[index + 1]) return;
//     if (widthHTML > elem[1]) currentSize = arrSizes[index + 1][0];
//   });
//   return currentSize;
// }

class Responsive {
  constructor(sizes) {
    this.widthHTML = document.documentElement.clientWidth;
    this.isActiveGamburger = false;
    this.sizes = sizes;
    this.toSelectTypeNav = this.toSelectTypeNav.bind(this);
    this.toSelectTypeNav();
    window.addEventListener("resize", this.toSelectTypeNav);
  }

  toSelectTypeNav() {
    this.widthHTML = document.documentElement.clientWidth;
    let burger, nav;

    if (this.widthHTML > this.sizes.md) this.isActiveGamburger = false;
    if (this.isActiveGamburger) return;
    burger = document.querySelector(".gamburger");
    nav = document.querySelector(".nav__list");

    if (this.widthHTML < this.sizes.md) {
      burger.classList.remove("gamburger_disabled");
      nav.classList.add("nav__list_disabled");
      this.isActiveGamburger = true;
    } else {
      burger.classList.add("gamburger_disabled");
      nav.classList.remove("nav__list_disabled");
      gamburger.closeModalWindow();
      this.isActiveGamburger = false;
    }
  }
}

let responsive = new Responsive(sizes);
