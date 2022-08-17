import React from "react";
import { MainComponent, LeftBlock, LeftBlock } from "../components";

function HomeContainer() {
  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <LeftBlock />
        <MainComponent />
        <LeftBlock />
      </div>
    </div>
  );
}

export default HomeContainer;
