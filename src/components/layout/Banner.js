import React from "react";
import { defaultAvatar } from "../../utils/images";
import SwiperMovie from "../common/SwiperMovie";

function Banner() {
  return (
    <div className="flex-grow md:pt-7 pt-0 pb-7 md:px-[2vw] px-[4vw] border-gray-darken min-h-screen">
      <div className="flex items-center justify-between">
        <div className="inline-flex gap-[40px] pb-[14px] border-b border-gray-darken relative">
          <button className="text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-5 transition duration-300 hover:text-white">
            TV Show
          </button>
          <button className="text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-5 transition duration-300 hover:text-white">
            Movie
          </button>
        </div>

        <div className="flex gap-6 items-center text-white">
          <p>Anonymous</p>
          <img
            src={defaultAvatar}
            alt="anynomous"
            className="w-7 h-7 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="mt-6 relative h-0 md:pb-[45%] pb-[55%] tw-banner-slider">
        <SwiperMovie />
      </div>
    </div>
  );
}

export default Banner;
