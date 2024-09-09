function showSubcategory(category) {
  document.querySelectorAll(".products").forEach(function (product) {
    product.classList.add("hidden");
  });

  document.getElementById("category-" + category).classList.remove("hidden");
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
