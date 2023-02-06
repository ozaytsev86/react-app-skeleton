import * as React from 'react';

import {AppReducer, SET_USER_INFO} from './App.reducer';

const initialState = {
  userInfo: null,
};

export const AppStoreProvider = ({children}) => {
  const [appState, dispatch] = React.useReducer(AppReducer, initialState);

  const setUserInfo = (accessToken) => {
    dispatch({type: SET_USER_INFO, payload: accessToken});
  };

  return (
    <AppContext.Provider value={{
      ...appState,
      setUserInfo,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = React.createContext(initialState);
