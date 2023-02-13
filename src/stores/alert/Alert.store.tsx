import * as React from 'react';

import {
  HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineInformationCircle, HiOutlineXCircle
} from 'react-icons/hi';
import {generateUid} from 'utils';

import {
  ADD_ALERT,
  AlertReducer,
  initialState,
  REMOVE_ALERT
} from './Alert.reducer';

export const AlertStoreProvider = ({children}) => {
  const [alertState, dispatch] = React.useReducer(AlertReducer, initialState);

  const addAlert = (alert) => {
    dispatch({type: ADD_ALERT, payload: {id: generateUid(), ...alert}});
  };

  const removeAlert = (alertId) => {
    dispatch({type: REMOVE_ALERT, payload: {id: alertId}});
  };

  const createSuccessAlert = (message) => addAlert({icon: HiOutlineCheckCircle, type: 'success', message, msec: 5000});
  const createInfoAlert = (message) => addAlert({icon: HiOutlineInformationCircle, type: 'info', message, msec: 5000});
  const createWarningAlert = (message) => addAlert({icon: HiOutlineExclamationCircle, type: 'warning', message});
  const createErrorAlert = (message) => addAlert({icon: HiOutlineXCircle, type: 'error', message});

  return (
    <AlertContext.Provider value={{
      ...alertState,
      createSuccessAlert,
      createInfoAlert,
      createWarningAlert,
      createErrorAlert,
      removeAlert,
    }}>
      {children}
    </AlertContext.Provider>
  );
};

export const AlertContext = React.createContext(initialState);
