let sizes = {
  xxs: 0,
  xs: 319.98,
  sm: 575.98,
  xxl: 1399.98,
  md: 767.98,
  lg: 991.98,
  xl: 1199.98,
};

class Responsive {
  constructor(objectSizes) {
    this.widthHTML = document.documentElement.clientWidth;
    this.isActiveIconGamburger = false;
    // Переводим объект в массив и сортируем его по возрастанию. На случай, если мы ошибёмся и значения свойств объекта будут не отсортированы.
    // Возвращаем новый объект с отсортированными свойствами по возрастанию.
    this.objectSizes = this.sortSizes(objectSizes);
    this.toSelectTypeNav = this.toSelectTypeNav.bind(this);

    this.nav = document.querySelector(".nav__list");
    this.burger = document.querySelector(".gamburger");

    this.toSelectTypeNav();
    window.addEventListener("resize", this.toSelectTypeNav);
  }
  sortSizes(sizes) {
    let result = Object.entries(sizes).sort((a, b) => {
      return a[1] - b[1];
    });

    let anotherSizesObj = {};
    result.forEach((elem) => {
      anotherSizesObj[elem[0]] = elem[1];
    });
    return anotherSizesObj;
  }
  toSelectTypeNav() {
    this.widthHTML = document.documentElement.clientWidth;

    if (this.widthHTML > this.objectSizes.md)
      this.isActiveIconGamburger = false;
    if (this.isActiveIconGamburger) return;

    if (this.widthHTML < this.objectSizes.md) {
      this.burger.classList.remove("gamburger_disabled");
      this.nav.classList.add("nav__list_disabled");

      this.isActiveIconGamburger = true;
    } else {
      if (gamburger.isActiveModalWindow) gamburger.closeModalWindow();
      this.burger.classList.add("gamburger_disabled");
      this.nav.classList.remove("nav__list_disabled");

      this.isActiveIconGamburger = false;
    }
  }
}

let responsive = new Responsive(sizes);
