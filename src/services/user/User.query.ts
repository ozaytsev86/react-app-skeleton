import {useAppStore, useQueryWithError} from 'hooks';

import {fetchUserInfo} from 'services/user/User.service';

import {Queries} from 'constants/Queries';

export const useFetchUserInfo = () => {
  const {setUserInfo} = useAppStore();

  return useQueryWithError(
    [Queries.UserInfo],
    fetchUserInfo,
    {
      onSuccess: (data) => {
        setUserInfo(data);
      }
    }
  );
};
