import React from 'react';
import SwiperRow from './SwiperRow';

function SliderSection({ title, data }) {
  return (
    <div className="overflow-hidden px-[2vw]">
      <h2 className="mb-3 text-2xl capitalize tracking-wide text-white">{title}</h2>
      <div className="relative h-fit">
        <SwiperRow data={data} />
      </div>
    </div>
  );
}

export default SliderSection;
