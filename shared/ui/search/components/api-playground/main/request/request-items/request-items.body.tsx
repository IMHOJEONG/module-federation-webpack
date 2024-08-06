import { ApiItemType } from "@/store/playground/api-validate.store";
import ApiPlaygroundRequestSubtitle from "../request.subtitle";
import ApiPlaygroundRequestTextArea from "../request.textarea";
import { FETCH_TYPES } from "@/types/fetch";

interface ApiPlaygroundRequestBodyItemProps {
  selectedItem: ApiItemType;
  setSelectedItem: (item?: ApiItemType) => void;
}

export default function ApiPlaygroundRequestBodyItem(
  props: ApiPlaygroundRequestBodyItemProps
) {
  // input props
  const { selectedItem, setSelectedItem } = props;

  // const
  const title = "BODY";

  return (
    <div className="min-h-28">
      {FETCH_TYPES.filter((type) => type !== "GET").includes(
        // @FIXME: weird
        selectedItem.config.method.toUpperCase() as
          | "POST"
          | "PUT"
          | "DELETE"
          | "PATCH"
      ) && (
        <div>
          <ApiPlaygroundRequestSubtitle
            title="BODY"
            subInfo={selectedItem.config.headers?.["Content-Type"]}
          />
          <ApiPlaygroundRequestTextArea
            value={JSON.stringify(selectedItem.config.data, null, 2)}
          />
        </div>
      )}
    </div>
  );
}
