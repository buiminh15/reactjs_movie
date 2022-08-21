import React from 'react';
import { logo } from '../../utils/images';
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <Link to="/">
      <div className="flex cursor-pointer items-center gap-4">
        <img src={logo} className="h-10 w-10 rounded-full object-cover" alt="logo" />
        <span className="text-2xl font-semibold uppercase text-white">
          moon<span className="text-blue-600">ee</span>
        </span>
      </div>
    </Link>
  );
}

export default Logo;
