import { useApiValidateStore } from "@/store/playground/api-validate.store";
import RequestAddModal from "./request/modal/request-modal.main";
import ApiPlaygroundResponseMain from "./response/response.main";
import ApiPlaygroundRequestMain from "./request/request.main";
import { LoadingSpinner } from "@ui/file-upload/upload-zone";
import { Fragment, useDeferredValue } from "react";
import { useQuery } from "@tanstack/react-query";
import { Text } from "rizzui";

export default function ApiPlaygroundMain() {
  // store
  const { selectedItem, setSelectedItem, runRequest, autoSend } =
    useApiValidateStore();

  // const
  const label = selectedItem?.label ?? "";

  // api
  const {
    data: requestResult,
    isFetching,
    refetch: rerunRequest,
  } = useQuery({
    queryKey: ["api-playground", label, selectedItem?.config?.url],
    queryFn: () => runRequest(selectedItem?.config!),
    enabled: !!selectedItem && autoSend,
    staleTime: Infinity,
  });

  const deferred = useDeferredValue(isFetching);

  return (
    <Fragment>
      <RequestAddModal />
      <div className="flex size-full flex-col min-h-0">
        <Text className="flex h-[calc(3rem_-_1px)] items-center border-b border-gray-200 pl-4 text-lg font-semibold shrink-0">
          Request / Response
        </Text>
        <div className="flex flex-1 min-h-0">
          <div className="flex-1 flex h-full flex-col gap-2 p-4">
            {!selectedItem && (
              <Text>
                선택된 API가 없습니다!
                <br />
                좌측 메뉴에서 API를 선택해주세요.
              </Text>
            )}
            {selectedItem && (
              <ApiPlaygroundRequestMain
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                refetch={rerunRequest}
                loading={deferred}
              />
            )}
          </div>
          <div className="relative flex-1 bg-gray-100 overflow-auto custom-scrollbar">
            {deferred && (
              <div className="absolute z-10 flex size-full items-center justify-center bg-gray-100 bg-opacity-30">
                <div
                  className="scale-150"
                  aria-labelledby="api-fetch-loading-spinner"
                >
                  <LoadingSpinner color="#87CEFA" />
                </div>
              </div>
            )}
            <div className="flex-1 flex size-full flex-col gap-2 p-4 text-xs">
              {selectedItem && (
                <ApiPlaygroundResponseMain response={requestResult} />
              )}
              {!selectedItem && (
                <div className="size-full flex items-center justify-center flex-col gap-2">
                  <div className="p-4 rounded-full bg-gray-400 bg-opacity-40 opacity-60">
                    <img className="scale-90" src="/space-rocket.png" />
                  </div>
                  <Text className="text-gray-500 text-sm font-semibold text-center">
                    전송 버튼을 눌러 <br />
                    데이터를 요청해보세요.
                  </Text>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
