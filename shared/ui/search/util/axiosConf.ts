import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { errorDispatch } from "./error/ErrorHandleDefault";
const REFRESH_URL = "/api/test/refresh";

//instance 생성, 
const instance: AxiosInstance = axios.create({
  baseURL: process.env.SERVER_URL || undefined,
});

//request interceptor
instance.interceptors.request.use(
  (config) => {

    const accessToken = localStorage.getItem("accessToken");
    try {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (err) {
      console.error("axios interceptor error", err);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);


//response interceptor
let lock = false;
let subscribers: ((token: string) => void)[] = [];

function subscribeTokenRefresh(cb: (token: string) => void) {
  subscribers.push(cb);
}

function onRrefreshed(token: string) {
  subscribers.forEach((cb) => cb(token));
}

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const { data: { accessToken } } = await instance.post<{ accessToken: string }>(REFRESH_URL, { refreshToken });

    lock = false;
    onRrefreshed(accessToken);
    subscribers = [];
    localStorage.setItem('accessToken', accessToken);

    //if (refreshToken !== null) {
    //  localStorage.setItem('refreshToken', refreshToken);
    //}

    return accessToken;
  } catch (e) {
    lock = false;
    subscribers = [];
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}


/* axios response interceptor 처리 
    - 400 에러 : 처리 안 함, 하지만
    - 401 에러 : refresh token을 이용하여 access token 재발급 기본 처리. 이외의 경우는 errorDispatch로 처리
    - 기타 에러 : errorDispatch로 처리
*/

instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;
    const originalRequest = config;

    if (config.url === REFRESH_URL || status !== 401) {
      const status = err.response?.status || 599;
      const errorCode = err.response?.data?.errorCode || "unknown";
      const errorMessage = err.response?.data?.errorMessage || "unknown";
      const timeout = err.code === "ECONNABORTED" || status === 408;

      if(err.response?.status !== 400) { 
        //errorDispatch({ status, errorCode, errorMessage, timeout });
        //return err.response;
        //TODO
        //  response를 throw하더라도 error 전역 처리에는 아무 문제가 될 것 같지는 않음
        //  하지만 문제가 되는 경우 error throw를 하지 않고 별도의 response 처리가 필요할 수도 있음.
      }

      return Promise.reject(err);
      //Promise.reject({ status, errorCode, errorMessage, timeout });
    }

    if (lock) {
      return new Promise((resolve) => {
        subscribeTokenRefresh((token: string) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(instance(originalRequest));
        });
      });
    }
    lock = true;
    const accessToken = await getRefreshToken()

    if (typeof accessToken === 'string') {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return instance(config);
    }

    return Promise.reject(err);
  }
);

export default instance;
