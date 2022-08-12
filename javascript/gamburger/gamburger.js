// let header = document.querySelector(".header__top");
let gamburgerElement = document.querySelector(".gamburger");
let navList = document.querySelector(".nav__list");

let gamburgerElements = gamburgerElement.querySelectorAll(".gamburger__span");
let logo = document.querySelector(".logo");

class Gamburger {
  constructor(gamburgerElement) {
    this.gamburgerElement = gamburgerElement;
    this.isActive = false;
    // this.gamburgerElement = this.gamburgerElement.bind(this);
    this.toFollow = this.toFollow.bind(this);
    this.gamburgerElement.addEventListener("click", this.toFollow);
  }

  openModalWindow() {
    let i;
    for (let elem of gamburgerElements) {
      elem.classList.add(`gamburger__item${i}_transform`);
      i++;
    }
    for (let elem of navList.children) {
      elem.classList.add("nav__list-item_full");
    }

    logo.classList.add("logo_disabled");
    navList.classList.add("nav__list_full");
    document.body.style.overflow = "hidden";
    this.gamburgerElement.classList.add("gamburger_opened");
  }
  closeModalWindow() {
    let i;
    for (let elem of gamburgerElements) {
      elem.classList.remove(`gamburger__item${i}_transform`);
      i++;
    }
    for (let elem of navList.children) {
      elem.classList.remove("nav__list-item_full");
    }

    logo.classList.remove("logo_disabled");
    navList.classList.remove("nav__list_full");
    document.body.style.overflow = "";
    this.gamburgerElement.classList.remove("gamburger_opened");
  }
  toFollow(event) {
    if (!gamburgerElement.contains(event.target)) return;

    if (this.isActive) {
      this.closeModalWindow();
      navList.classList.add("nav__list_disabled");
      this.isActive = false;
    } else {
      this.openModalWindow();
      navList.classList.remove("nav__list_disabled");
      this.isActive = true;
    }
  }
}

let gamburger = new Gamburger(gamburgerElement);

navList.addEventListener("click", function removeModalWindow(event) {
  if (event.target.tagName !== "A") return;
  gamburger.closeModalWindow();
});
