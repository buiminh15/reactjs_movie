import React from 'react';
import { Outlet } from 'react-router-dom';
function DefaultLayout() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
