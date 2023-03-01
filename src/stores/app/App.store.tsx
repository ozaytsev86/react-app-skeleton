import * as React from 'react';
import {ReactElement} from 'react';

import {$TSFixMe} from 'types';

import {AppReducer, SET_USER_INFO} from './App.reducer';

export interface AppState {
  userInfo: null | {
    name: string
    sprites: {
      front_default: string
    }
  }
  setUserInfo: (data: $TSFixMe) => void,
}

const initialState: AppState = {
  userInfo: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserInfo: () => {}
};

export const AppContext = React.createContext(initialState);

export const AppStoreProvider = ({children}: { children: ReactElement }) => {
  const [appState, dispatch] = React.useReducer(AppReducer, initialState);

  const setUserInfo = (userInfo: { name: string }) => {
    dispatch({type: SET_USER_INFO, payload: userInfo});
  };

  return (
    <AppContext.Provider value={{
      ...appState,
      setUserInfo
    }}>
      {children}
    </AppContext.Provider>
  );
};
