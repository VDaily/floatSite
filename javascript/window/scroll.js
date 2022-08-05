let header = document.querySelector(".header__top");
let heightScroll = 0;
let marginTop = parseFloat(getComputedStyle(header, null).marginTop);
headerStyle();

window.addEventListener("scroll", headerStyle);

function headerStyle(event) {
  if (window.pageYOffset > marginTop) {
    header.classList.add("header__top_retrofit");
  } else {
      header.classList.remove("header__top_retrofit");
  }
}

header.addEventListener('click', function clickAnchor(event) {
  let link = event.target.closest('a')
  if(!link) return;

  let href = link.getAttribute('href').slice(1);
  let element = document.getElementById(href);

  if(!element) return;
  let oldLinkActive = document.querySelector('.nav__link_active');
  oldLinkActive.classList.remove('nav__link_active');
  link.classList.add("nav__link_active");
  let heightY = element.getBoundingClientRect().top;
  let hieghtHeader = header.offsetHeight;
  event.preventDefault();
  window.scrollBy({top: heightY - hieghtHeader, behavior: "smooth"});
});
