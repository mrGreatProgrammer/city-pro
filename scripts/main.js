// SCRIPTS
// BURGER
const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".menu");

function toggleMenu() {
  menuBtn.classList.toggle("opened-burger");
  submenu.classList.toggle("vis__menu");
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});