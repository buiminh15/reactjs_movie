import React from "react";
import { SIDE_MENU } from "../../constants/menu-list";
import MenuItem from "../styles/MenuItem";

function SideMenu() {
  return (
    <div className="w-full pt-10 pl-8">
      <ul>
        {SIDE_MENU.map(({ id, title, data }, index) => (
          <li key={id}>
            <h2 className={`text-white uppercase text-xl  ${index === 0 ? '-mt-6' : 'mt-12'}`}>{title}</h2>
            <ul className="ml-4 mt-8 flex flex-col gap-3">
              {data.map(({ id, element, title, link, path }) => (
                  <MenuItem
                    key={id}
                    element={element}
                    title={title}
                    link={link}
                    path={path}
                  />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
