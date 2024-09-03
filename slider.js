const slides = document.querySelectorAll("[data-slide]");
const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");
const dots = document.querySelectorAll(".dot");

let current = 0;

function updateSlider(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active-slide");
    if (parseInt(slide.dataset.slide) === index) {
      slide.classList.add("active-slide");
    }
  });

  dots.forEach((dot) => dot.classList.remove("dot-fill"));
  dots[index].classList.add("dot-fill");
}

function showNextSlide() {
  current = (current + 1) % dots.length;
  updateSlider(current);
}

function showPrevSlide() {
  current = (current - 1 + dots.length) % dots.length;
  updateSlider(current);
}

leftButton.addEventListener("click", showPrevSlide);
rightButton.addEventListener("click", showNextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    updateSlider(current);
  });
});
