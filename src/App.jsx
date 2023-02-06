import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Main, AlertContainer} from 'components';

import {useFetchPokemon} from 'services/pokemon/Pokemon.query';

import {ROUTES} from 'constants/Routes';

const Landing = React.lazy(() => import('views/Landing'));
const NotFound = React.lazy(() => import('views/NotFound'));

const publicRoutes = (
  <Routes>
    <Route index exact path={ROUTES.ROOT} element={<Landing />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const App = () => {
  const {isLoading} = useFetchPokemon();

  return (
    <>
      <AlertContainer />

      <Main>
        {isLoading && <p>Loading</p>}
        {!isLoading && (
          <React.Suspense fallback="Loading...">
            {publicRoutes}
          </React.Suspense>
        )}
      </Main>
    </>
  );
};
