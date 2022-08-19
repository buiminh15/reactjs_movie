import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
function DefaultLayout() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <Suspense fallback={null}>
          <Routes>
            {routes.map(({ element: Element, id, title, query, ...rest }) => (
              <Route {...rest} key={id} element={Element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default DefaultLayout;
