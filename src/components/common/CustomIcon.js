import React from "react";
import { IconContext } from "react-icons";
function CustomIcon({element, providerStyle, children}) {
  return (
    <>
      <IconContext.Provider
        value={{ color: "#989898", ...providerStyle }}
      >
        <div>
          {element ? element : children}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default CustomIcon;
