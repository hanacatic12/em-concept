function showSubcategory(category) {
  document.querySelectorAll(".products").forEach(function (product) {
    product.classList.add("hidden");
  });

  document.querySelectorAll(".subtype-btn").forEach(function (button) {
    button.classList.remove("subtype-btn-active");
  });

  document.getElementById("category-" + category).classList.remove("hidden");

  document
    .querySelector(".subtype-btn:nth-child(" + category + ")")
    .classList.add("subtype-btn-active");
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (category) {
    showSubcategory(category);
  } else {
    showSubcategory(1);
  }
};
