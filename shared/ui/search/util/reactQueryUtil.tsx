import {
  QueryClientProvider,
  QueryClient,
  useMutation,
  useQueryClient,
  MutationFunction,
} from "@tanstack/react-query";
import React, { useState, useEffect, PropsWithChildren } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useErrorHandle } from "./error/ErrorHandleDefault";
import { rest } from "lodash";

export interface MutationOptions<TData = {}, TVariables = void> {
  onMutate?: (variables?: TVariables) => void;

  onSuccess?: (data: TData, variables?: TVariables) => void;
  onError?: (error: Error, variables?: TVariables) => void;

  onSettled?: (
    data: TData | undefined,
    error: Error | null,
    variables?: TVariables
  ) => void;

  networkMode?: "online" | "always" | "offlineFirst";
  retry?: boolean | number;
  retryDelay?: number;
  mutationKey?: string[];
  gcTime?: number;
  throwOnError?: boolean;
  invalidateKeys?: string[];
}

export default function ReactQueryProviders({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 1,
          throwOnError: true,
        },
        mutations: {
          throwOnError: true,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <ReactQueryUtil>{children}</ReactQueryUtil>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  );
}

function ReactQueryUtil({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();

  useErrorHandle();

  useEffect(() => {
    const handler = (e: unknown) => {
      const { detail: queryIds } = e as { detail: string[] };
      queryClient.invalidateQueries({ queryKey: queryIds });
    };

    window.addEventListener("invalidateQueries", handler);
    return () => {
      window.removeEventListener("invalidateQueries", handler);
    };
  }, [queryClient]);

  return <>{children}</>;
}

export function invalidateQueries(queryIds: string[]) {
  window.dispatchEvent(
    new CustomEvent("invalidateQueries", { detail: queryIds })
  );
}

function addInvalidatesProcToOptions<TData, TVariables = void>(
  options?: MutationOptions<TData, TVariables>
) {
  const { invalidateKeys, ...rest } = options || {};

  const _onSettled = (
    data: TData | undefined,
    error: Error | null,
    variables: TVariables | undefined
  ) => {
    invalidateKeys && invalidateQueries(invalidateKeys);
    rest.onSettled && rest.onSettled(data, error, variables);
  };
  return { ...rest, onSettled: _onSettled };
}

export function useMutationEx<TData = {}>(
  mutationFn: MutationFunction<TData>,
  options?: MutationOptions<TData>
) {
  const { invalidateKeys, ...rest } = options || {};
  return useMutation({
    mutationFn,
    //...rest,
    ...addInvalidatesProcToOptions(options),
  });
}
