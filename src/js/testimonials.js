import Swiper from 'swiper';
import 'swiper/css/bundle';

const testimonialsDots = document.querySelectorAll('.testimonials-dot');

let testimonialsSwiper;

testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
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
      document
        .querySelector('.testimonials-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateTestimonialsDots(this.realIndex);
    },
  },
});

function updateTestimonialsDots(index) {
  testimonialsDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

testimonialsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    testimonialsSwiper.slideTo(index);
  });
});
