import { ApiResultType } from '@/store/playground/api-validate.store';
import { Divider } from '@mui/material';
import cn from '@utils/class-names';
import { Fragment } from 'react';

interface ApiPlaygroundResponseMainProps {
  response?: ApiResultType;
}

export default function ApiPlaygroundResponseMain(
  props: ApiPlaygroundResponseMainProps
) {
  // input props
  const { response } = props;

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="min-h-4 ">
        {response && (
          <Fragment>
            <div className="flex gap-2 tracking-tight">
              <div className="flex gap-1">
                <span>Status:</span>
                <p
                  className={cn(
                    'flex gap-1',
                    response.isError ? 'text-red-500' : 'text-green-500'
                  )}
                >
                  <span>
                    {response.status === Number.MAX_SAFE_INTEGER
                      ? 'NETWORK'
                      : response.status}
                  </span>
                  <span>{response.isError ? 'ERROR' : 'OK'}</span>
                </p>
              </div>
              <div className="flex gap-1 tracking-tighter">
                <span>Size:</span>
                <i data-size={response.sizeBytes}>{response.sizeBytes}B</i>
              </div>
              <div className="flex gap-1 tracking-tighter">
                <span>Duration:</span>
                <i data-duration={response.duration}>
                  {response.duration.toFixed(0)}ms
                </i>
              </div>
            </div>
            <Divider className="my-2" />
          </Fragment>
        )}
      </div>
      {response && (
        <Fragment>
          {response.responseRaw?.config && (
            <pre className="tracking-tight font-font-semibold flex flex-col w-full break-all whitespace-pre mt-2">
              <span className="font-bold">Request</span>
              {Object.entries((response.responseRaw?.config as any) ?? {})
                .filter(([key]) => key !== 'data')
                .map(([key, value]) => {
                  return (
                    <span key={key} className="">
                      {key}: {JSON.stringify(value, null, 2)}
                    </span>
                  );
                })}
              <Divider className="my-2" />
            </pre>
          )}
          <div className="tracking-tight font-font-semibold">
            {response.responseRaw?.headers && (
              <div className="flex flex-col">
                <span className="font-bold">Response</span>
                {Object.entries(response.responseRaw.headers).map(
                  ([key, value]) => {
                    return (
                      <span key={key} className="break-all">
                        {key}: {JSON.stringify(value)}
                      </span>
                    );
                  }
                )}
                <Divider className="my-2" />
              </div>
            )}
            {response.responseRaw?.data && (
              <div className="flex flex-col">
                <span className="font-bold">Data</span>
                <pre className="break-all py-4 pr-4 w-max">
                  {JSON.stringify(response.responseRaw.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}
