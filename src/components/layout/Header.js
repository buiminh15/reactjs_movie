import React, { useRef, useState } from "react";
import { CustomIcon, Logo } from "../common";
import { FiMenu } from "react-icons/fi";
import { useOnClickOutside } from "../../hooks";
import SideMenu from "./SideMenu";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setOpenMenu(false));
  return (
    <div className="h-10 my-5">
      <div className="flex items-center justify-between">
        <Logo />
        <CustomIcon
          element={<FiMenu />}
          providerStyle={{ className: "text-3xl cursor-pointer clr-gray-500" }}
          handleClick={() => setOpenMenu(true)}
        />
      </div>
      <div
        ref={ref}
        className={`fixed z-[100] top-0 -left-[2500px] bg-dark w-4/5 h-full duration-500 ${
          openMenu && "left-0"
        }`}
      >
        <SideMenu />
      </div>
      <div
        className={`w-full z-[90] h-screen inset-0 opacity-40 duration-100 ${
          openMenu && "fixed bg-black"
        }`}
      />
    </div>
  );
}

export default Header;
