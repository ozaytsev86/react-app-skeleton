import * as React from 'react';
import {ReactElement} from 'react';

import {AppReducer, SET_USER_INFO} from './App.reducer';

interface AppStore {
  userInfo: null | {
    name: string
    sprites: { front_default: string }
  }
}

const initialState: AppStore = {
  userInfo: null
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
