import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {
  Main, AlertContainer, Navbar, Footer
} from 'components';

import {useFetchPokemon} from 'services/pokemon/Pokemon.query';

import {Routes as AppRoutes} from 'constants/Routes';

const Landing = React.lazy(() => import('views/Landing'));
const Contact = React.lazy(() => import('views/Contact'));
const NotFound = React.lazy(() => import('views/NotFound'));

const publicRoutes = (
  <Routes>
    <Route index exact path={AppRoutes.Root} element={<Landing />} />
    <Route path={AppRoutes.Contact} element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const App = () => {
  const {isLoading} = useFetchPokemon();

  return (
    <>
      <AlertContainer />
      <Navbar />
      <Main>
        {isLoading && <p>Loading</p>}
        {!isLoading && (
          <React.Suspense fallback="Loading...">
            {publicRoutes}
          </React.Suspense>
        )}
      </Main>
      <Footer />
    </>
  );
};
