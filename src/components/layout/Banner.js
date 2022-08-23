import React from 'react';
import { defaultAvatar } from '../../utils/images';
import { SwiperBanner } from '../common';
function Banner({ currentTab, handleTab }) {
  const activeStyle = `text-white after:bottom-0 after:h-[3px] after:w-5 after:bg-white after:absolute`;
  return (
    <div className="flex-grow px-[4vw] pt-0 pb-7 md:px-[2vw] md:pt-7">
      <div className="flex items-center justify-between">
        <div className="border-gray relative inline-flex gap-[40px] border-b pb-[14px]">
          <button
            onClick={() => handleTab('tv')}
            className={`font-medium duration-100 after:left-[13%] hover:text-white ${
              currentTab === 'tv' ? activeStyle : 'clr-gray-500'
            }`}>
            TV Show
          </button>
          <button
            onClick={() => handleTab('movie')}
            className={`font-medium duration-100 after:left-[78%] hover:text-white ${
              currentTab === 'movie' ? activeStyle : 'clr-gray-500'
            }`}>
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
