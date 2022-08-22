import React from 'react';
import { Logo } from '../common';
import SideMenu from './SideMenu';

function LeftBlock() {
  return (
    <div className="border-gray hidden h-screen border-r py-10  md:flex-col md:items-center">
      <Logo />
      <SideMenu />
    </div>
  );
}

export default LeftBlock;
