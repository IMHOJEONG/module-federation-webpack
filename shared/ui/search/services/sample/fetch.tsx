import {
  UserReq,
  UserResp,
  RefreshReq,
  RefreshResp,
  DataResp,
  PostDataReq,
} from '@/services/sample/types';
import { AxiosResponse } from 'axios';
import axios from '@/util/axiosConf';
import z from 'zod';

export const postLogin = async (user: UserReq) => {
  try {
    const { data } = await axios.post<UserResp>('/api/test/login', user);

    const parsed = UserResp.parse(data);
    console.log('>>> parsed:', parsed);

    return parsed;
  } catch (e) {
    throw e;
  }
};

export const postTokenRefresh = async (refreshToken?: string) => {
  try {
    const _refreshToken = refreshToken || localStorage.getItem('refreshToken');
    const { data } = await axios.post<RefreshResp>('/api/test/refresh', {
      refreshToken: _refreshToken,
    });

    const parsed = RefreshResp.parse(data);
    console.log('>>> parsed:', parsed);
    return parsed;
  } catch (e) {
    throw e;
  }
};

export const queryData = async (param?: string) => {
  try {
    const { data } = await axios.get<DataResp>(
      `/api/test/data${param ? `?param=${param}` : ''}`
    );
    console.log('>>>[queryData] data:', data);

    const parsed = DataResp.parse(data);
    console.log('>>>[queryData] parsed:', parsed);
    return parsed;
  } catch (e) {
    throw e;
  }
};

export const postData = async (sendData: PostDataReq) => {
  try {
    const { data } = await axios.post<DataResp>('/api/test/data', sendData);
    console.log('>>>[postData] data:', data);
    const parsed = DataResp.parse(data);
    console.log('>>>[postData] parsed:', parsed);
    return parsed;
  } catch (e) {
    throw e;
  }
};

export const queryDataErr = async (param?: string) => {
  try {
    const { data } = await axios.get<DataResp>(
      `/api/test/dataerr${param ? `?param=${param}` : ''}`
    );
    console.log('>>>[queryData] data:', data);

    const parsed = DataResp.parse(data);
    console.log('>>>[queryData] parsed:', parsed);
    return parsed;
  } catch (e) {
    throw e;
    //throw Error("Error 403");
  }
};

export const postDataErr = async (param?: string) => {
  try {
    const { data } = await axios.post<DataResp>(
      `/api/test/dataerr${param ? `?param=${param}` : ''}`
    );
    console.log('>>>[queryData] data:', data);

    const parsed = DataResp.parse(data);
    console.log('>>>[queryData] parsed:', parsed);
    return parsed;
  } catch (e) {
    throw e;
  }
};
