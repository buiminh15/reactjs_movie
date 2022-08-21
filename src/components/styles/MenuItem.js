import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_MESSAGES } from "../../constants";
import { userStorage } from "../../utils/storage";
import { CustomIcon } from "../common";

function MenuItem({ icon, title, path, auth }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (auth) {
      if (!userStorage) {
        toast.info(TOAST_MESSAGES.AUTH_INFO);
        return;
      }
    }
    navigate(path);
  };
  return (
    <li className="mb-3" onClick={handleNavigate}>
      <div
        className={`flex w-full h-8 gap-3 cursor-pointer border-blue ${
          pathname === path ? "clr-blue-500 border-r-4" : "clr-gray"
        }`}
      >
        <CustomIcon element={icon} providerStyle={{ className: `text-2xl` }} />
        <span className="text-lg capitalize">{title}</span>
      </div>
    </li>
  );
}

export default MenuItem;
