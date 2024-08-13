import ApiPlaygroundRequestPathVariablesItem from "./request-items/request-items.path-variables";
import ApiPlaygroundRequestAuthorizationItem from "./request-items/request-items.authorization";
import ApiPlaygroundRequestHeadersItem from "./request-items/request-items.headers";
import ApiPlaygroundRequestBodyItem from "./request-items/request-items.body";
import { useAutoResizeTextArea } from "@/util/hooks/useAutoResizeTextarea";
import { ApiItemType } from "@/store/playground/api-validate.store";
import { FolderTreeViewItem } from "../../treeview/treeview.type";
import { MOCK_TREE_ITEMS } from "../../treeview/treeview.mock";
import ApiPlaygroundButton from "../../api-playground.button";
import MdOutlineContentCopy from "react-icons/md/MdOutlineContentCopy";
import BsFillCaretRightFill from "react-icons/bs/BsFillCaretRightFill";
import ApiPlaygroundMainTag from "../main.tag";
import IoClose from "react-icons/io5/IoClose";
import { FetchType } from "@/types/fetch";

interface ApiPlaygroundRequestMainProps {
  selectedItem: ApiItemType;
  setSelectedItem: (item?: ApiItemType) => void;
  refetch: () => void;
  loading: boolean;
}

export default function ApiPlaygroundRequestMain(
  props: ApiPlaygroundRequestMainProps
) {
  // input props
  const { selectedItem, setSelectedItem, refetch, loading } = props;

  // hooks
  const url = selectedItem.config.url;
  const textAreaRef = useAutoResizeTextArea(url);

  const handleUrlChange = (value: string) => {
    setSelectedItem({
      ...selectedItem,
      config: { ...selectedItem.config, url: value },
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <ApiPlaygroundMainTag
          type={selectedItem.config.method as FetchType}
          title={selectedItem.label}
        />
        <div className="flex gap-2">
          <ApiPlaygroundButton
            className="select-none bg-gray-500 text-white hover:bg-gray-600 hover:text-white active:bg-gray-600"
            onAction={() => {
              const item = MOCK_TREE_ITEMS.filter((t) => t.type === "FOLDER")
                .map((t) => (t as FolderTreeViewItem).children)
                .flat(1)
                .find((item) => item.id === selectedItem.id);

              if (item && item.type === "ITEM") {
                setSelectedItem(item);
              }
            }}
          >
            <IoClose className="mr-1" />
            Reset
          </ApiPlaygroundButton>
          <ApiPlaygroundButton
            className="select-none bg-blue-500 text-white hover:bg-blue-600 hover:text-white active:bg-blue-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            onAction={refetch}
            disabled={loading}
          >
            <BsFillCaretRightFill className="mr-1" />
            Run
          </ApiPlaygroundButton>
        </div>
      </div>
      <div className="group relative mb-4">
        <textarea
          ref={textAreaRef}
          className="custom-scrollbar h-8 max-h-12 w-full flex-1 resize-none rounded-md border-none bg-gray-100 pr-8 text-xs outline-none"
          value={url}
          placeholder="요청 URL"
          onChange={(e) => handleUrlChange(e.target.value)}
        />
        <button
          type="button"
          className="pointer-events-none absolute right-1 top-4 z-10 inline-block -translate-y-1/2 rounded-full p-1 opacity-0 transition-opacity duration-300 hover:bg-gray-400/20 active:bg-gray-400/40 group-hover:pointer-events-auto group-hover:opacity-100"
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
        >
          <MdOutlineContentCopy />
        </button>
      </div>

      {/* request details */}
      <ApiPlaygroundRequestHeadersItem
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <ApiPlaygroundRequestAuthorizationItem
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      {/* rest */}
      <ApiPlaygroundRequestPathVariablesItem
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <ApiPlaygroundRequestBodyItem
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}
