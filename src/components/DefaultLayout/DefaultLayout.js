import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { ErrorFallback } from '../common';
function DefaultLayout() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="bg-primary min-h-screen">
        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default DefaultLayout;
