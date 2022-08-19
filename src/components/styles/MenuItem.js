import React from "react";
import { CustomIcon } from "../common";
import { Link } from "react-router-dom";

function MenuItem({ element, title = "Home", active = false, link = "#" }) {
  return (
    <li className="mb-3">
      <Link
        to={link}
        className={`flex w-full h-8 gap-3 cursor-pointer border-blue ${
          active ? "clr-blue-500 border-r-4" : "clr-gray"
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
