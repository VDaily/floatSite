let header = document.querySelector(".header__top");

headerStyle();

window.addEventListener("scroll", headerStyle);

function headerStyle() {
  let coords = header.getBoundingClientRect();
  console.log(coords.top);
  if (window.pageYOffset > coords.top) {
    header.classList.add("header__top_retrofit");
  } else {
    if (!header.classList.contains("header__top_retrofit")) return;
    header.classList.remove("header__top_retrofit");
  }
}
