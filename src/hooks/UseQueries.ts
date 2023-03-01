import {QueryFunction, QueryKey} from '@tanstack/query-core/src/types';
import {useMutation, useQuery} from '@tanstack/react-query';
import {UseQueryOptions} from '@tanstack/react-query/src/types';
import {toaster} from 'evergreen-ui';

interface QueryOptions extends UseQueryOptions {
  successMessage?: string,
}

export const useQueryWithError = (
  queryKey: QueryKey,
  queryFunction: QueryFunction,
  options?: QueryOptions
) => {
  return useQuery(
    queryKey,
    queryFunction, {
      ...options,
      onSuccess: (data) => {
        if (options?.successMessage) toaster.success('', {description: options.successMessage});
        options?.onSuccess && options.onSuccess(data);
      },
      onError: (message: string) => toaster.danger('', {description: message})
    }
  );
};

export const useMutationWithError = (
  queryFunction: QueryFunction,
  options?: QueryOptions
) => {
  return useMutation(
    // TODO: fix this type
    queryFunction, {
      ...options,
      onSuccess: (data) => {
        if (options?.successMessage) toaster.success('', {description: options.successMessage});
        options?.onSuccess && options.onSuccess(data);
      },
      onError: (message: string) => toaster.danger('', {description: message})
    }
  );
};
