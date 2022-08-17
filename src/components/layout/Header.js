import React from "react";
import { logo } from "../utils/images";

function Header() {
  return (
    <div className="h-10 my-5">
      <img src={logo} className="w-10 h-10 rounded-full object-cover" />
    </div>
  );
}

export default Header;
