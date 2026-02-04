const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;
const totalImages = images.length;

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  index++;

  if (index >= totalImages) {
    index = 0;
  }

  showSlide();
}, 2000);

// =========  section =============

const toggle = document.getElementById("navbar-toggle");
const links = document.getElementById("navbar-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
});
