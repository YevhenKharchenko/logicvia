import Swiper from 'swiper';
import 'swiper/css/bundle';

const processLeftArrow = document.getElementById('processLeftArrow');
const processRightArrow = document.getElementById('processRightArrow');
const processDotsContainer = document.querySelector('.process-dots');
let processDots = [];

let processSwiper;

processSwiper = new Swiper('.process-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
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
      slidesPerGroup: 3,
      spaceBetween: 0,
    },
  },
  on: {
    afterInit(swiper) {
      document.querySelector('.process-swiper-container').classList.add('show');
      createProcessDots(swiper);
      updateProcessDots(null, swiper);
    },
    slideChange(swiper) {
      updateProcessDots(null, swiper);
      updateProcessArrows(swiper);
    },
  },
});

function createProcessDots(swiper) {
  processDotsContainer.innerHTML = '';
  processDots = [];

  const slidesPerGroup = getSlidesPerGroup(swiper);
  const totalGroups = Math.ceil(swiper.slides.length / slidesPerGroup);

  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement('div');
    dot.classList.add('process-dot');
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      swiper.slideTo(i * slidesPerGroup);
    });

    processDotsContainer.appendChild(dot);
    processDots.push(dot);
  }
}

function updateProcessDots(_, swiper) {
  const slidesPerView = swiper.params.slidesPerView;
  const slidesPerGroup = getSlidesPerGroup(swiper);
  const totalSlides = swiper.slides.length;

  let groupIndex;

  if (slidesPerView >= 3) {
    if (swiper.activeIndex === 0) {
      groupIndex = 0;
    } else {
      groupIndex = 1;
    }
  } else {
    groupIndex = Math.floor(swiper.activeIndex / slidesPerGroup);
  }

  processDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === groupIndex);
  });
}

function getSlidesPerGroup(swiper) {
  const breakpoint = swiper.currentBreakpoint || 0;
  const bpSettings = swiper.params.breakpoints?.[breakpoint];
  return bpSettings?.slidesPerGroup || swiper.params.slidesPerGroup;
}

function updateProcessArrows(swiper) {
  processLeftArrow.disabled = swiper.isBeginning;
  processRightArrow.disabled = swiper.isEnd;
}

processLeftArrow.addEventListener('click', () => {
  processSwiper.slidePrev();
});

processRightArrow.addEventListener('click', () => {
  processSwiper.slideNext();
});

updateProcessArrows(processSwiper);

processSwiper.on('breakpoint', swiper => {
  createProcessDots(swiper);
  updateProcessDots(null, swiper);
});
