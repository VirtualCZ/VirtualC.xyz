const slider = document.querySelector(".slider-range");

function setSliderBg() {
  const value = slider.value;
  const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
  const color = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${percent}%, var(--text) ${percent}%, var(--text) 100%)`;
  slider.style.background = color;
}
slider.addEventListener("input", function () {
  setSliderBg();
});

setSliderBg();
