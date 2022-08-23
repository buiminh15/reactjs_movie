import React from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Lazy, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGE_URL } from '../../utils/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CustomIcon, SwiperButtonNext, SwiperButtonPrev } from '../common';

const RowImage = ({ link, imageLink, movieTitle, rating }) => {
  return (
    <Link to={link}>
      <div className="bg-dark group relative h-[262px] max-w-[175px] overflow-hidden rounded duration-300 hover:scale-105 ">
        <span className="absolute top-4 left-2 z-10 flex items-center gap-1 rounded bg-blue-500 p-1 text-sm text-white">
          {rating.toFixed(1)}
          <CustomIcon element={<FiStar />} providerStyle={{ className: 'text-sm ' }} />
        </span>
        <div className="h-[222px]">
          <LazyLoadImage alt="row" src={imageLink} className="object-cover max-h-full max-w-full w-full h-full" effect="blur" />
        </div>
        <div className=" px-2">
          <p className="clr-gray truncate text-center text-sm capitalize leading-10 duration-100 group-hover:text-white">
            {movieTitle}
          </p>
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
      {data?.map(({ title, id, vote_average, poster_path, name }) => (
        <SwiperSlide style={{ width: '100%' }} key={id}>
          <RowImage
            link={'#'}
            imageLink={`${IMAGE_URL}/w500${poster_path}`}
            movieTitle={title || name}
            rating={vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperRow;
