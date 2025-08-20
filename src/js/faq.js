import Swiper from 'swiper';
import 'swiper/css/bundle';

const faqDots = document.querySelectorAll('.faq-dot');

let faqSwiper;

faqSwiper = new Swiper('.faq-swiper-container', {
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
      slidesPerView: 5,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.faq-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateFaqDots(this.realIndex);
    },
  },
});

function updateFaqDots(index) {
  faqDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

faqDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    faqSwiper.slideTo(index);
  });
});

const faqBtns = document.querySelectorAll('.faq-top-text-btn');
faqBtns.forEach(btn => btn.addEventListener('click', onBtnClick));

function onBtnClick(e) {
  const faqTop = e.currentTarget;
  const faqContainer = faqTop.closest('.faq-list-item');
  const bottomText = faqContainer.querySelector('.faq-bottom-text');

  document.querySelectorAll('.faq-list-item').forEach(item => {
    if (item !== faqContainer) {
      item.classList.remove('faq-open');
      item.querySelector('.faq-bottom-text').classList.remove('is-visible');
    }
  });

  bottomText.classList.toggle('is-visible');

  if (bottomText.classList.contains('is-visible')) {
    faqContainer.classList.add('faq-open');
  } else {
    faqContainer.classList.remove('faq-open');
  }
}
