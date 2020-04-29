// var open = document.querySelector(".header__link-menu")
// var close = document.querySelector(".header__link-menu--close")

// open.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   menu--hide.classList.add("visually-hidden")
//   menu--hide.classList.add("")
// }
// )

var open = document.querySelector(".header__link-menu");
var close = document.querySelector(".header__link-menu--close");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.classList.add("header__link-menu--close");
  close.classList.remove("header__link-menu");
})
