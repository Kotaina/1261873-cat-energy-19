var MainNav = document.querySelector(".header__main-nav");
var MainNavBtn = document.querySelector(".header__link-menu");

MainNav.classList.remove("header__main-nav--no-js");

MainNavBtn.addEventListener("click", function () {
  if (MainNav.classList.contains("header__main-nav--closed")) {
    MainNav.classList.remove("header__main-nav--closed");
    MainNav.classList.add("header__main-nav--opened");
  } else {
    MainNav.classList.add("header__main-nav--closed");
    MainNav.classList.remove("header__main-nav--opened");
  }
});
