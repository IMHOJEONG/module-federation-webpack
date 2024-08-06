import {
  ErrorBoundary,
  FallbackProps,
  useErrorBoundary,
  withErrorBoundary,
  ErrorBoundaryProps,
} from "react-error-boundary";
import React, { ComponentType } from "react";

import { AxiosError } from "axios";

import { errorDispatch } from "./ErrorHandleDefault";

export interface ErrorData {
  status: number;
  errorCode?: string;
  errorMessage?: string;
  timeout?: boolean;
}

export function ErrorBoundaryEx({
  children,
  onError,
  errors,
  fromGlobalErrorBoundary,
  ...props
}: ErrorBoundaryProps & {
  errors?: ErrorData[];
  fromGlobalErrorBoundary?: boolean;
}) {
  function _onError(err: Error, info: React.ErrorInfo) {
    if (err instanceof AxiosError && err.isAxiosError) {
      const status = err.response?.status || 599;
      const errorCode = err.response?.data?.errorCode || "unknown";
      const errorMessage = err.response?.data?.errorMessage || "unknown";
      const timeout = err.code === "ECONNABORTED" || status === 408;

      const found =
        errors &&
        errors.some(
          (err) => err.status === status /*&& err.errorCode === errorCode*/
        );

      if (!found) {
        /* default 처리 */
        errorDispatch(
          { status, errorCode, errorMessage, timeout },
          { fromGlobalErrorBoundary }
        );
      }
    }
    onError && onError(err, info);
  }

  return (
    <ErrorBoundary {...props} onError={_onError}>
      {children}
    </ErrorBoundary>
  );
}
