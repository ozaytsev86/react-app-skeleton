import * as React from 'react';
import {ReactElement} from 'react';
import {IconType} from 'react-icons';

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

interface AddAlertParams {
  icon: IconType
  type: string
  message: string
  msec?: number
}

export const AlertStoreProvider = ({children}: {children: ReactElement}) => {
  const [alertState, dispatch] = React.useReducer(AlertReducer, initialState);

  const addAlert = (alert: AddAlertParams) => {
    dispatch({type: ADD_ALERT, payload: {id: generateUid(), ...alert}});
  };

  const removeAlert = (alertId: string) => {
    dispatch({type: REMOVE_ALERT, payload: {id: alertId}});
  };

  const createSuccessAlert = (message: string) => addAlert({icon: HiOutlineCheckCircle, type: 'success', message, msec: 5000});
  const createInfoAlert = (message: string) => addAlert({icon: HiOutlineInformationCircle, type: 'info', message, msec: 5000});
  const createWarningAlert = (message: string) => addAlert({icon: HiOutlineExclamationCircle, type: 'warning', message});
  const createErrorAlert = (message: string) => addAlert({icon: HiOutlineXCircle, type: 'error', message});

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
