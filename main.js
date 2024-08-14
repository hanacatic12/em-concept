const hamburger = document.querySelector(".hamburger");
const hamburger_close = document.querySelector(".hamburger-close");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  hamburger_close.classList.remove("hidden");
});

hamburger_close.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  hamburger_close.classList.add("hidden");
});
