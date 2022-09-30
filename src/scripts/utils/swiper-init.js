import Swiper from 'swiper/bundle';

const SWIPER_EVENT = 'RUN_SWIPER';

const runSwiper = () => {
  const mySwiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export { SWIPER_EVENT, runSwiper };
