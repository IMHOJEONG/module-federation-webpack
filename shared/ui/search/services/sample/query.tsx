import {
  postLogin,
  postTokenRefresh,
  queryData,
  postData,
  queryDataErr,
} from '@/services/sample/fetch';
import { useQuery, useMutation, queryOptions } from '@tanstack/react-query';
import { SERVICE_KEYS } from '@/services/serviceKeys';

export const sampleQueries = {
  all: () => [SERVICE_KEYS.TEST],
  mid: () => [SERVICE_KEYS.TEST, 'mid'],
  testdata: (param: string) =>
    queryOptions({
      queryKey: [...sampleQueries.all(), param],
      queryFn: () => queryData(param),
    }),
  testdataErrType1: (param: string) =>
    queryOptions({
      queryKey: [...sampleQueries.all(), param],
      queryFn: () => queryDataErr(param),
      throwOnError: false,
    }),
  testdataErrType2: (param: string) =>
    queryOptions({
      queryKey: [...sampleQueries.all(), param],
      queryFn: () => queryDataErr(param),
    }),
};
