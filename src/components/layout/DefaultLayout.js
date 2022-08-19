import React from "react";
import { Outlet } from "react-router-dom";
function DefaultLayout() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
