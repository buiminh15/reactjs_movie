import React from 'react';
import { SwiperRow } from '../common';

function Row({ title = 'test', data }) {
  return (
    <div className="overflow-hidden px-[4vw]">
      <h2 className="mb-3 text-2xl capitalize tracking-wide text-white">{title}</h2>
      <div className="relative h-fit">
        <SwiperRow data={data} />
      </div>
    </div>
  );
}

export default Row;
