import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Autoplay, Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Test, Test1, Test2 } from "../../utils/images";
import { SwiperButtonNext, SwiperButtonPrev } from "../styles";
import CustomIcon from "./CustomIcon";


const BannerImage = ({
  movieLink,
  imgUrl,
  title = "Westworld",
  subTitle = "Thế Giới Viễn Tây",
  date = "First air date: 2016-10-02",
}) => {
  return (
    <Link to={movieLink}>
      <div className="relative w-full h-full group">
        <div className="overflow-hidden">
          <img
            src={imgUrl}
            alt=""
            className="swiper-lazy object-cover w-full h-full"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#000]"></div>
        <div className="absolute top-[50%] -translate-y-1/2 left-[5%] md:max-w-md max-w-[200px]">
          <h2 className="md:text-5xl text-xl text-blue-800  text-primary font-black tracking-wide md:tw-multiline-ellipsis-2 tw-multiline-ellipsis-3">
            {title}
          </h2>
          <div>
            <p className="text-white font-semibold md:text-2xl text-base mt-6">
              {subTitle}
            </p>
            <p className="mt-1 text-gray-500">{date}</p>
          </div>
        </div>
        <div className="absolute inset-0 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 grid place-items-center rounded-full bg-gradient-to-br from-purple-500 to-[#c353b4] z-10 opacity-0 group-hover:opacity-100 transition duration-700">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            className="text-white"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
          </svg>
        </div>
        
        <div className=" top-0 z-10 flex mt-2 ml-2 sm:absolute">
          <SwiperButtonPrev>
            <CustomIcon
              element={<FiChevronLeft />}
              providerStyle={{ className: "text-3xl ", color: "#fff" }}
            />
          </SwiperButtonPrev>
          <SwiperButtonNext>
            <CustomIcon
              element={<FiChevronRight />}
              providerStyle={{ className: "text-3xl", color: "#fff" }}
            />
          </SwiperButtonNext>
        </div>
      </div>
    </Link>
  );
};

function SwiperBanner() {
  return (
    <>
      <Swiper
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 5,
        }}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        lazy={true}
        navigation={true}
        modules={[Lazy, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {[Test, Test1, Test2].map((img, i) => (
          <SwiperSlide style={{ width: "100%", position: "relative" }} key={i}>
            <BannerImage movieLink={"#"} imgUrl={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperBanner;
