import * as React from 'react';

import {DEFAULT_LIMIT} from 'constants/App';

import {
  AppReducer, SET_USER_PROFILE, SET_USER_INFO, SET_SELECTED_CLUBS, SET_USER_SETTINGS, SET_SEARCH_CLUBS_FILTERS
} from './App.reducer';

const initialState = {
  userInfo: null,
  userProfile: null,
  selectedClubs: [],
  userSettings: null,
  searchClubsState: {
    term: '',
    page: 0,
    limit: DEFAULT_LIMIT
  },
};

export const AppStoreProvider = ({children}) => {
  const [appState, dispatch] = React.useReducer(AppReducer, initialState);

  const setUserInfo = (accessToken) => {
    dispatch({type: SET_USER_INFO, payload: accessToken});
  };

  const setUserProfile = (data) => {
    dispatch({type: SET_USER_PROFILE, payload: data});
  };

  const setUserSettings = (data) => {
    dispatch({type: SET_USER_SETTINGS, payload: data});
  };

  const setSelectedClubs = (selectedClubs) => {
    dispatch({type: SET_SELECTED_CLUBS, payload: selectedClubs});
  };

  const setSearchClubsState = (filters) => {
    dispatch({type: SET_SEARCH_CLUBS_FILTERS, payload: filters});
  };

  return (
    <AppContext.Provider value={{
      ...appState,
      setUserInfo,
      setUserProfile,
      setUserSettings,
      setSelectedClubs,
      setSearchClubsState,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = React.createContext(initialState);
