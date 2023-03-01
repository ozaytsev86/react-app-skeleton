import {ReactElement} from 'react';
import {
  MemoryRouter, Route, Routes, useLocation
} from 'react-router-dom';

import {QueryClientProvider} from '@tanstack/react-query';
import {render as rtlRender} from '@testing-library/react';
import {queryClient} from 'configs/ReactQueryConfig';
import {AppContext} from 'stores';

import {mockUserInfo} from './api/User.mock';

const appContextProviderValues = {
  userInfo: mockUserInfo,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserInfo: () => {},
};

/*
 * Dummy component to test the redirection
 */

const LocationDisplay = () => {
  const location = useLocation();

  return <div data-test-id="location-display">{location.pathname}</div>;
};

/*
* Wrapper to render a component with a specific route or sub route wrapped with all the master data loaded
* @param {Element} Component to render
* @param {options} Route and Path where component should be rendered
* @returns {ReactElement} Rendered component
* @example renderWithMasterAndRouter(<MyAwesomeView />, {route: '/whatever/1', path: /whatever/:id});
*/

const renderWithMasterAndRouter = (
  Element: ReactElement,
  options?: {
    route?: string,
    path?: string,
    componentOnly?: boolean,
  }
) => {
  const route = options?.route || '/';
  const path = options?.route || '/';

  window.history.pushState({}, 'Test page', route);

  const Wrapper = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{...appContextProviderValues}}>
          <MemoryRouter initialEntries={[route]}>
            {options?.componentOnly
              ? Element
              : (
                <Routes>
                  <Route path={route || path} element={Element} />
                  <Route path="*" element={<LocationDisplay />} />
                </Routes>
              )}
          </MemoryRouter>
        </AppContext.Provider>
      </QueryClientProvider>
    );
  };

  return rtlRender(Element, {wrapper: Wrapper});
};

const render = (ui: ReactElement, options = {}) => {
  const Wrapper = ({children}: {children: ReactElement}) => {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  };

  rtlRender(ui, {wrapper: Wrapper, ...options});
};

export {
  render,
  renderWithMasterAndRouter,
};
