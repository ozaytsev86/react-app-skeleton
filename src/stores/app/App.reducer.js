export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_SELECTED_CLUBS = 'SET_SELECTED_CLUBS';
export const SET_USER_SETTINGS = 'SET_USER_SETTINGS';
export const SET_SEARCH_CLUBS_FILTERS = 'SET_SEARCH_CLUBS_FILTERS';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    case SET_SELECTED_CLUBS:
      return {
        ...state,
        selectedClubs: action.payload
      };
    case SET_USER_SETTINGS:
      return {
        ...state,
        userSettings: action.payload
      };
    case SET_SEARCH_CLUBS_FILTERS:
      return {
        ...state,
        searchClubsState: action.payload
      };
    default:
      return state;
  }
};
