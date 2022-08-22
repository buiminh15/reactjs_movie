import React from 'react';
import { defaultAvatar } from '../../utils/images';
import { SwiperBanner } from '../common';

function Banner() {
  return (
    <div className="border-gray-darken flex-grow px-[4vw] pt-0 pb-7 md:px-[2vw] md:pt-7">
      <div className="flex items-center justify-between">
        <div className="border-gray-darken relative inline-flex gap-[40px] border-b pb-[14px]">
          <button className="font-medium text-white transition duration-300 after:absolute after:bottom-0 after:left-[13%] after:h-[3px] after:w-5 after:bg-white hover:text-white">
            TV Show
          </button>
          <button className="clr-gray-500 font-medium transition duration-300 after:absolute after:bottom-0 after:left-[13%] after:h-[3px] after:w-5 after:bg-white hover:text-white">
            Movie
          </button>
        </div>

        <div className="clr-gray-500 flex items-center gap-6">
          <p>Anonymous</p>
          <img
            src={defaultAvatar}
            alt="anynomous"
            className="h-7 w-7 rounded-full object-cover "
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="tw-banner-slider relative mt-6 h-0 pb-[55%] md:pb-[45%]">
        <SwiperBanner />
      </div>
    </div>
  );
}

export default Banner;
