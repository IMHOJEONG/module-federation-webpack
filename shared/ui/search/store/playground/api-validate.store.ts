import { MergedRequestConfig } from '@/components/api-playground/treeview/treeview.type';
import { catchError, from, lastValueFrom, map, of } from 'rxjs';
import instance from '@/util/axiosConf';
import { AxiosResponse } from 'axios';
import { create } from 'zustand';

let abortController = new AbortController();

export type ApiItemType = {
  config: MergedRequestConfig;
  id: string;
  label: string;
};

export type ApiResultType = {
  isError: boolean;
  status: number;
  responseRaw?: AxiosResponse<any, any>;
  duration: number;
  sizeBytes: number;
};

interface ApiValidateStore {
  selectedItem?: ApiItemType;
  setSelectedItem: (item?: ApiItemType) => void;

  autoSend: boolean;
  setAutoSend: (autoSend: boolean) => void;

  runRequest: (config: MergedRequestConfig) => Promise<ApiResultType>;
}

export const useApiValidateStore = create<ApiValidateStore>((set, get) => ({
  selectedItem: undefined,
  autoSend: false,
  loading: false,

  // functions

  setSelectedItem: (item) => {
    if (get().autoSend && item) {
      get().runRequest(item.config);
    }

    return set({ selectedItem: item });
  },
  setAutoSend: (autoSend) => {
    return set({ autoSend });
  },

  async runRequest(config) {
    const startTime = performance.now();
    abortController.abort();
    abortController = new AbortController();

    const rs = from(
      instance({ ...config, signal: abortController.signal })
    ).pipe(
      map((r) => ({
        isError: false,
        status: r.status,
        responseRaw: r,
        duration: performance.now() - startTime,
        sizeBytes: Buffer.byteLength(
          JSON.stringify(r.data) + JSON.stringify(r.headers)
        ),
      })),
      catchError((err) => {
        return err?.response
          ? of({
              isError: true,
              status: err.response.status,
              headers: err.response.headers,
              body: JSON.stringify(err.response.data),
              duration: performance.now() - startTime,
              sizeBytes: Buffer.byteLength(
                JSON.stringify(err.response.data) +
                  JSON.stringify(err.response.headers)
              ),
            })
          : // in case of network error
            of({
              isError: true,
              // sentinel value
              status: Number.MAX_SAFE_INTEGER,
              headers: {},
              body: '',
              duration: performance.now() - startTime,
              sizeBytes: 0,
            });
      })
    );

    return (await lastValueFrom(rs)) as ApiResultType;
  },
}));
