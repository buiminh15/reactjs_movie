import { RouteEnum } from "../../configuration/route-config";
import { routes } from "../../routes";
import React, { Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function DefaultLayout() {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return <Navigate to={RouteEnum.home} replace />;
  }
  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <Suspense fallback={null}>
          <Routes>
            {routes.map(({ element: Element, title, query, ...rest }) => (
              <Route {...rest} key={uuidv4()} element={Element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default DefaultLayout;
