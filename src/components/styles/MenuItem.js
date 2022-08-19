import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CustomIcon } from "../common";

function MenuItem({ element, title = "Home", path }) {
  const { pathname } = useLocation();

  return (
    <li className="mb-3">
      <Link
        to={path}
        className={`flex w-full h-8 gap-3 cursor-pointer border-blue ${
          pathname === path ? "clr-blue-500 border-r-4" : "clr-gray"
        }`}
      >
        <CustomIcon
          element={element}
          providerStyle={{ className: `text-2xl` }}
        />
        <span className="text-lg">{title}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
