let gamburgerElement = document.querySelector(".gamburger");
let navList = document.querySelector(".nav__list");

let gamburgerElements = gamburgerElement.querySelectorAll(".gamburger__span");
let logo = document.querySelector(".logo");

class Gamburger {
  constructor(gamburgerElement) {
    this.gamburgerElement = gamburgerElement;
    this.isActiveModalWindow = false;
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
    navList.classList.remove("nav__list_disabled");
    this.isActiveModalWindow = true;
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
    navList.classList.add("nav__list_disabled");
    this.isActiveModalWindow = false;
  }
  toFollow(event) {
    if (!this.gamburgerElement.contains(event.target)) return;

    if (this.isActiveModalWindow) {
      this.closeModalWindow();
    } else {
      this.openModalWindow();
    }
  }
}

let gamburger = new Gamburger(gamburgerElement);

navList.addEventListener("click", function removeModalWindow(event) {
  if (event.target.tagName !== "A") return;
  if (gamburger.isActiveModalWindow) gamburger.closeModalWindow();
});
