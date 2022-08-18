import React from "react";
import { logo } from "../../utils/images";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center gap-4 cursor-pointer">
        <img
          src={logo}
          className="w-10 h-10 rounded-full object-cover"
          alt="logo"
        />
        <span className="uppercase text-2xl text-white font-semibold">
          moon<span className="text-blue-600">ee</span>
        </span>
      </div>
    </Link>
  );
}

export default Logo;
