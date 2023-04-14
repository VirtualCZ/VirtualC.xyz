const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".rating");
const ratingValue = document.querySelector("#rating-value");

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    ratingValue.value = i + 1;
    updateStars();
  });

  stars[i].addEventListener("mouseover", function () {
    for (let j = 0; j < stars.length; j++) {
      if (j <= i) {
        stars[j].classList.add("filled");
      } else {
        stars[j].classList.remove("filled");
      }
    }
  });

  stars[i].addEventListener("mouseout", function () {
    updateStars();
  });
}

function updateStars() {
  const value = parseInt(ratingValue.value);
  for (let i = 0; i < stars.length; i++) {
    if (i < value) {
      stars[i].classList.add("filled");
    } else {
      stars[i].classList.remove("filled");
    }
  }
}
