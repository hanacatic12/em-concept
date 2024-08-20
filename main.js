const hamburger = document.querySelector(".hamburger");
const hamburger_close = document.querySelector(".hamburger-close");
const dimmed_background = document.querySelector(".dimmed-background");
const nav_menu = document.querySelector(".header-nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  hamburger_close.classList.remove("hidden");
  dimmed_background.classList.remove("hidden");
  nav_menu.classList.add("header-nav-list-open");
});

hamburger_close.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  hamburger_close.classList.add("hidden");
  dimmed_background.classList.add("hidden");
  nav_menu.classList.remove("header-nav-list-open");
});
