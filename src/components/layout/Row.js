import React from "react";
import { SwiperRow } from "../common";

function Row({ title = "test", data }) {
  return (
    <div className="px-[4vw] overflow-hidden">
      <h2 className="text-white text-2xl capitalize tracking-wide mb-3">
        {title}
      </h2>
      <div className="h-fit relative">
        <SwiperRow data={data}/>
      </div>
    </div>
  );
}

export default Row;
