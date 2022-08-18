import React from "react";
import { CustomIcon, Logo } from "../common";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <div className="h-10 my-5">
      <div className="flex items-center justify-between">
       <Logo />
        <CustomIcon 
          element={<FiMenu />}
          providerStyle={{ className: 'text-3xl cursor-pointer' }}
        />
        
      </div>

    </div>
  );
}

export default Header;
