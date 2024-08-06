import {
  UserReq,
  UserResp,
  RefreshReq,
  RefreshResp,
  DataResp,
  PostDataReq,
} from '@/services/sample/types';
import {
  postLogin,
  postTokenRefresh,
  queryData,
  postData,
  postDataErr,
} from '@/services/sample/fetch';
import {
  invalidateQueries,
  useMutationEx,
  MutationOptions,
} from '@/util/reactQueryUtil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sampleQueries } from './query';

export function useMutationLogin(
  account: UserReq,
  options?: MutationOptions<UserResp>
) {
  return useMutationEx(() => postLogin(account), {
    ...options,
    invalidateKeys: sampleQueries.all(),
  });
}

export function useMutationRefreshToken(
  options?: MutationOptions<RefreshResp>
) {
  return useMutationEx(() => postTokenRefresh(), options);
}

export function useMutationPostData(
  data: PostDataReq,
  options?: MutationOptions<DataResp>
) {
  return useMutationEx(() => postData(data), options);
}

export function useMutationDataErr(
  data?: string,
  options?: MutationOptions<DataResp>
) {
  return useMutationEx(() => postDataErr(data), options);
}
