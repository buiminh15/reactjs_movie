import React from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Lazy, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Test, Test1, Test2 } from '../../utils/images';
import { SwiperButtonNext, SwiperButtonPrev } from '../styles';
import CustomIcon from './CustomIcon';

const RowImage = ({ link, imageLink, movieTitle, rating }) => {
  return (
    <Link to={link}>
      <div className="bg-dark group h-[262px] max-w-[175px] overflow-hidden rounded duration-300 hover:scale-105 hover:brightness-110">
        <span className="absolute top-4 left-2 flex items-center gap-1 rounded bg-blue-500 p-1 text-sm text-white">
          {rating}
          <CustomIcon element={<FiStar />} providerStyle={{ className: 'text-sm ' }} />
        </span>

        <img src={imageLink} alt="row" className="h-[85%] rounded-tl rounded-tr object-cover" />
        <div className="grid h-[15%] place-items-center">
          <h3 className="clr-gray text-center capitalize duration-100 group-hover:text-white">
            {movieTitle}
          </h3>
        </div>
      </div>
    </Link>
  );
};

function SwiperRow({ data }) {
  return (
    <Swiper
      lazy={true}
      navigation={true}
      modules={[Lazy, Navigation]}
      slidesPerView={5}
      spaceBetween={20}
      loop={true}
      className="!static h-full w-[1000px] !p-2"
    >
      <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
        <SwiperButtonPrev>
          <CustomIcon
            element={<FiChevronLeft />}
            providerStyle={{ className: 'text-4xl text-white' }}
          />
        </SwiperButtonPrev>
      </div>
      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
        <SwiperButtonNext>
          <CustomIcon
            element={<FiChevronRight />}
            providerStyle={{ className: 'text-4xl text-white' }}
          />
        </SwiperButtonNext>
      </div>
      {[Test, Test1, Test2, Test, Test1, Test2].map((img, i) => (
        <SwiperSlide style={{ width: '100%' }} key={i}>
          <RowImage link={'#'} imageLink={img} movieTitle="text" rating={'2.0'} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperRow;
