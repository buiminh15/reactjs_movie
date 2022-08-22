import React from 'react';
import { Outlet } from 'react-router-dom';
function DefaultLayout() {
  return (
    <div className="bg-primary min-h-screen">
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
