let header = document.querySelector(".header__top");
let headerMarginTop = parseFloat(getComputedStyle(header, null).marginTop);
fixingHeaderWhenScrolling();

window.addEventListener("scroll", fixingHeaderWhenScrolling);

function fixingHeaderWhenScrolling(event) {
  let NumberOfPixelsFromTop = window.pageYOffset;
  if (NumberOfPixelsFromTop > headerMarginTop) {
    header.classList.add("header__top_retrofit");
  } else {
    header.classList.remove("header__top_retrofit");
  }
}

header.addEventListener("click", function scrollingToLinkedElement(event) {
  let link = event.target.closest(".nav__link");
  let id,
    linkedElement,
    oldActiveLink,
    distanceOfElementFromTop,
    headerHeight,
    distanceWithoutHeaderHeight;

  if (!link) return;

  id = link.getAttribute("href").slice(1);
  linkedElement = document.getElementById(id);

  if (!linkedElement) return;
  event.preventDefault();

  oldActiveLink = document.querySelector(".nav__link_active");
  oldActiveLink.classList.remove("nav__link_active");
  link.classList.add("nav__link_active");
  distanceOfElementFromTop = linkedElement.getBoundingClientRect().top;
  headerHeight = header.offsetHeight;
  distanceWithoutHeaderHeight = distanceOfElementFromTop - headerHeight;

  window.scrollBy({
    top: distanceWithoutHeaderHeight,
    behavior: "smooth",
  });
});
