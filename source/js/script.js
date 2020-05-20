var mainnav = document.querySelector(".header__main-nav");
var mainnavbtn = document.querySelector(".header__link-menu");

mainnav.classList.remove("header__main-nav--no-js");

mainnavbtn.addEventListener("click", function () {
  if (mainnav.classList.contains("header__main-nav--closed")) {
    mainnav.classList.remove("header__main-nav--closed");
    mainnav.classList.add("header__main-nav--opened");
  } else {
    mainnav.classList.add("header__main-nav--closed");
    mainnav.classList.remove("header__main-nav--opened");
  }
});
