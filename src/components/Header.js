import React from "react";
import { logo } from "../utils/images";

function Header() {
  return (
    <div className="h-10 my-5">
      <img src={logo} />
    </div>
  );
}

export default Header;
