import {ApiService} from 'services/Api.service';

import {POKEMON} from 'constants/Urls';

export const fetchPokemon = () => {
  return ApiService.publicGet({url: POKEMON});
};
