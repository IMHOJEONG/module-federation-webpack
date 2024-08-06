import { useEffect, useCallback, Suspense, PropsWithChildren } from "react";
// import { useRouter } from "next/navigation";

import { ErrorData } from "./ErrorHandle";
import { AxiosError } from "axios";

import toast from "@/util/Toast";

interface ErrorDataOption {
  fromGlobalErrorBoundary?: boolean;
}

function SimpleErrorObserver() {
  const subscribers: Array<(err: ErrorData & ErrorDataOption) => void> = [];

  function subscribe(cb: (err: ErrorData & ErrorDataOption) => void) {
    subscribers.push(cb);
  }

  function notify(err: ErrorData & ErrorDataOption) {
    subscribers.forEach((cb) => cb(err));
  }

  subscribe((err: ErrorData & ErrorDataOption) => {
    console.log(">> err:", err);
  });

  return [subscribe, notify] as const;
}

const [errorSubscribe, errorNotify] = SimpleErrorObserver();

export function useErrorHandle() {
  // const router = useRouter();

  useEffect(() => {
    function errorHandle(err: ErrorData & ErrorDataOption) {
      console.log(">> errorHandle:", err);

      const customRoute = (url: string) => {
        const { fromGlobalErrorBoundary } = err;
        if (fromGlobalErrorBoundary) {
          window.location.href = url;
        } else {
          // router.push(url);
        }
      };

      if (err.timeout) {
        //router.push('/page-server-not-responding');
      } else if (err.status === 400) {
        //toast.alert(err.errorMessage);
      } else if (err.status === 401) {
        //router.push('/login');
      } else if (err.status === 403) {
        //router.push('/welcome');
        //toast.error('403 error');
        customRoute("/welcome");
        //window.location.href = '/welcome';
      } else if (err.status >= 500 && err.status < 600) {
        customRoute("/welcome");
        //router.push('/page-server-internal-error');
      }
    }

    errorSubscribe((err) => {
      errorHandle(err);
    });
  }, []);
}

export function errorDispatch(
  err: ErrorData | Error,
  options?: ErrorDataOption
) {
  const _options = options || {};
  if (err instanceof AxiosError && err.isAxiosError) {
    const status = err.response?.status || 599;
    const errorCode = err.response?.data?.errorCode || "unknown";
    const errorMessage = err.response?.data?.errorMessage || "unknown";
    const timeout = err.code === "ECONNABORTED" || status === 408;
    errorNotify({ status, errorCode, errorMessage, timeout, ..._options });
  } else if ("status" in err) {
    errorNotify({ ...err, ..._options });
  }
}
