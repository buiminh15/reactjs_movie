import React from "react";
import { MainComponent, LeftBlock, RightBlock } from "../components";

function HomeContainer() {
  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <LeftBlock />
        <MainComponent />
        <RightBlock />
      </div>
    </div>
  );
}

export default HomeContainer;
