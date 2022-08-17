let footerContent = document.querySelector(".footer__content");

footerContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("footer__column-header")) {
    let parent = event.target.closest(".footer__column");
    let links;
    if (!parent) return;

    links = parent.querySelector(".footer__links");
    if (links.style.display === "block") {
      links.style.display = "";
      parent.classList.remove("footer__column_opened");
      return;
    }
    parent.classList.add("footer__column_opened");
    links.style.display = "block";
  }
});
