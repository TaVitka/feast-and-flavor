import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

let options = {
  slidesPerView: 1,
  speed: 700,
  effect: 'fade',
  autoplay: {
    delay: 200,
  },
  centeredSlides: true,
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
}

const swiperSpecials = new Swiper('.special__slider1', options);
const gallery1 = new Swiper('.gallery__slider1', options);
const gallery2 = new Swiper('.gallery__slider2', options);
const gallery3 = new Swiper('.gallery__slider3', options);
const gallery4 = new Swiper('.gallery__slider4', options);

const highlights = new Swiper('.highlights', options);