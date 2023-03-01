import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Navbar, Footer} from 'components';

import {useFetchUserInfo} from 'services/user/User.query';

import {Routes as AppRoutes} from 'constants/Routes';

const Landing = React.lazy(() => import('views/Landing'));
const Contact = React.lazy(() => import('views/Contact'));
const NotFound = React.lazy(() => import('views/NotFound'));
const Login = React.lazy(() => import('views/Login'));

const publicRoutes = (
  <Routes>
    <Route index path={AppRoutes.Root} element={<Landing />} />
    <Route path={AppRoutes.Contact} element={<Contact />} />
    <Route path={AppRoutes.Login} element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const App = () => {
  const {isLoading} = useFetchUserInfo();

  return (
    <>
      <Navbar />
      <main>
        {isLoading && <p>Loading</p>}
        {!isLoading && (
          <React.Suspense fallback="Loading...">
            {publicRoutes}
          </React.Suspense>
        )}
      </main>
      <Footer />
    </>
  );
};
