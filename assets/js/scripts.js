// Banner Slider
let swiper = new Swiper(".home-banner", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
});

//Header
const element = document.querySelector('.main-header');

function handleScroll() {
  if (window.scrollY > 100) {
    element.classList.add('scrolled');
  } else {
    element.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);