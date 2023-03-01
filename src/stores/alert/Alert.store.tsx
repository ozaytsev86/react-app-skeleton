import * as React from 'react';
import {ReactElement} from 'react';

import {toaster} from 'evergreen-ui';

export const AlertStoreProvider = ({children}: {children: ReactElement}) => {
  const createSuccessAlert = (message: string) => toaster.success('', {description: message});
  const createInfoAlert = (message: string) => toaster.notify('', {description: message});
  const createWarningAlert = (message: string) => toaster.warning('', {description: message});
  const createErrorAlert = (message: string) => toaster.danger('', {description: message});

  return (
    <AlertContext.Provider value={{
      createSuccessAlert,
      createInfoAlert,
      createWarningAlert,
      createErrorAlert,
    }}>
      {children}
    </AlertContext.Provider>
  );
};

export const AlertContext = React.createContext({});
