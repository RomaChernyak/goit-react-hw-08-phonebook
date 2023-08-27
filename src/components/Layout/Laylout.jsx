import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import { AppHead } from 'components/AppHead/AppHead';
// import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <AppHead />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </>
  );
};
