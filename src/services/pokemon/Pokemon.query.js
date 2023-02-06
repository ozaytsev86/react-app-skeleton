import {useAppStore, useQueryWithError} from 'hooks';

import {fetchPokemon} from 'services/pokemon/Pokemon.service';

import {Queries} from 'constants/Queries';

export const useFetchPokemon = () => {
  const {setUserInfo} = useAppStore();

  return useQueryWithError(
    [Queries.Pokemon],
    fetchPokemon,
    {
      onSuccess: (data) => {
        setUserInfo(data);
      }
    }
  );
};
