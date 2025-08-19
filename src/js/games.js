import Swiper from 'swiper';
import 'swiper/css/bundle';

const gamesDots = document.querySelectorAll('.games-dot');
const gamesLeftArrow = document.getElementById('gamesLeftArrow');
const gamesRightArrow = document.getElementById('gamesRightArrow');

let gamesSwiper;

gamesSwiper = new Swiper('.games-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 46,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      spaceBetween: 22,
      slidesPerView: 2,
    },
  },
  on: {
    init: () => {
      document.querySelector('.games-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateGamesDots(this.realIndex);
      updateGamesArrows(this);
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

updateGamesArrows(gamesSwiper);

function updateGamesArrows(swiper) {
  gamesLeftArrow.disabled = swiper.isBeginning;
  gamesRightArrow.disabled = swiper.isEnd;
}

gamesLeftArrow.addEventListener('click', () => {
  gamesSwiper.slidePrev();
});

gamesRightArrow.addEventListener('click', () => {
  gamesSwiper.slideNext();
});
