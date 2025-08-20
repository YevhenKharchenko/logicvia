import Swiper from 'swiper';
import 'swiper/css/bundle';

const gamesDots = document.querySelectorAll('.games-dot');

let gamesSwiper;

gamesSwiper = new Swiper('.games-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
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
      document.querySelector('.games-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateGamesDots(this.realIndex);
    },
  },
});

function updateGamesDots(index) {
  gamesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

gamesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gamesSwiper.slideTo(index);
  });
});
