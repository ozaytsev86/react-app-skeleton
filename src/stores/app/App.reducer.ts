import {$TSFixMe} from 'types';

import {AppState} from './App.store';

export const SET_USER_INFO = 'SET_USER_INFO';

type Action = {
  type: string,
  payload: $TSFixMe
}

export const AppReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};
