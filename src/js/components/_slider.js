import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperSpecials = new Swiper('.special__slider', {
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
    nextEl: '.special__slider .swiper-button-next',
    prevEl: '.special__slider .swiper-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.special__slider .swiper-pagination',
  },
});
