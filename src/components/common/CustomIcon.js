import React from "react";
import { IconContext } from "react-icons";
function CustomIcon({element, providerStyle, handleClick, children}) {
  return (
    <>
      <IconContext.Provider
        value={providerStyle }
      >
        <div onClick={handleClick}>
          {element ? element : children}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default CustomIcon;
