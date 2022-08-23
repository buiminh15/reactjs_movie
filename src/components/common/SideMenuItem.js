import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '../../utils/constants';
import { userStorage } from '../../utils/storage';
import { CustomIcon } from '.';

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
    <li className="group mb-3" onClick={handleNavigate}>
      <div
        className={`border-blue flex h-8 w-full cursor-pointer gap-3 ${
          pathname === path ? 'clr-blue-500 border-r-4' : 'clr-gray'
        }`}
      >
        <CustomIcon
          element={icon}
          providerStyle={{
            className: `text-2xl ${pathname === path ? '' : 'group-hover:text-white'} duration-300`
          }}
        />
        <span
          className={`text-lg capitalize  duration-300 ${
            pathname === path ? '' : 'group-hover:text-white'
          }`}
        >
          {title}
        </span>
      </div>
    </li>
  );
}

export default MenuItem;
