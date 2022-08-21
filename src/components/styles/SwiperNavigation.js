import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className={`cursor-pointer`} onClick={() => swiper.slideNext()}>
      {children}
    </div>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className={`cursor-pointer`} onClick={() => swiper.slidePrev()}>
      {children}
    </div>
  );
};

export { SwiperButtonNext, SwiperButtonPrev };
