import Swiper from 'swiper';
import 'swiper/css/bundle';

const teamDots = document.querySelectorAll('.team-dot');

let teamSwiper;

teamSwiper = new Swiper('.team-swiper-container', {
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
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.team-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateTeamDots(this.realIndex);
    },
  },
});

function updateTeamDots(index) {
  teamDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

teamDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    teamSwiper.slideTo(index);
  });
});
