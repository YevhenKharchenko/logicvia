import Swiper from 'swiper';
import 'swiper/css/bundle';

const aboutDots = document.querySelectorAll('.about-dot');

let aboutSwiper;

aboutSwiper = new Swiper('.about-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.about-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateAboutDots(this.realIndex);
    },
  },
});

function updateAboutDots(index) {
  aboutDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

aboutDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    aboutSwiper.slideTo(index);
  });
});
