import * as React from 'react';
import {Route} from 'react-router-dom';

import {Main} from 'components';

import {AlertContainer} from 'components/alert/AlertContainer';

import {ROUTES} from 'constants/Routes';

const Landing = React.lazy(() => import('views/landing/Landing'));
const NotFound = React.lazy(() => import('views/NotFound'));

const publicRoutes = (
  <>
    <Route index exact path={ROUTES.ROOT} element={<Landing />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export const App = () => {
  return (
    <>
      <AlertContainer />
      <div>
        <p>navbar</p>
      </div>

      <Main>
        <Loading overlay isVisible={isLoading} />
        {!isLoading && (
          <React.Suspense fallback={'Loading...'}>
            <div>Private routes</div>
            {publicRoutes}
          </React.Suspense>
        )}
      </Main>

      <div>Footer</div>
    </>
  );
};
