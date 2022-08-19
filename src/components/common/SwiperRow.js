import React from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Test, Test1, Test2 } from "../../utils/images";
import { SwiperButtonNext, SwiperButtonPrev } from "../styles";
import CustomIcon from "./CustomIcon";

const RowImage = ({ link, imageLink, movieTitle, rating }) => {
  return (
    <Link to={link}>
      <div className="overflow-hidden group hover:scale-105 hover:brightness-110 duration-300 rounded bg-dark max-w-[175px] h-[262px]">
        <span className="rounded bg-blue-500 p-1 absolute top-4 left-2 text-sm text-white flex items-center gap-1">
          {rating}
          <CustomIcon
            element={<FiStar />}
            providerStyle={{ className: "text-sm ", color: "#fff" }}
          />
        </span>

        <img
          src={imageLink}
          alt="row"
          className="h-[85%] object-cover rounded-tl rounded-tr"
        />
        <div className="h-[15%] grid place-items-center">
          <h3 className="text-[#d1d5db] text-center capitalize duration-100 group-hover:text-white">
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
      className="w-[1000px] h-full !p-2 !static"
    >
      <div className="top-1/2 left-2 -translate-y-1/2 z-10 absolute">
        <SwiperButtonPrev>
          <CustomIcon
            element={<FiChevronLeft />}
            providerStyle={{ className: "text-4xl ", color: "#fff" }}
          />
        </SwiperButtonPrev>
      </div>
      <div className="top-1/2 right-0 -translate-y-1/2 z-10 absolute">
        <SwiperButtonNext>
          <CustomIcon
            element={<FiChevronRight />}
            providerStyle={{ className: "text-4xl", color: "#fff" }}
          />
        </SwiperButtonNext>
      </div>
      {[Test, Test1, Test2, Test, Test1, Test2].map((img, i) => (
        <SwiperSlide style={{ width: "100%" }} key={i}>
          <RowImage link={"#"} imageLink={img} movieTitle="text" rating={"2.0"}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperRow;
