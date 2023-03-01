import {ApiService} from 'services/Api.service';

import {USER_INFO} from 'constants/Urls';

export const fetchUserInfo = () => {
  return ApiService.publicGet({url: USER_INFO});
};
