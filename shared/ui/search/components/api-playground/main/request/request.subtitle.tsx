import BiPlus from "react-icons/bi/BiPlus";

interface ApiPlaygroundSubtitleProps {
  title: string;
  subInfo?: string;
  onAdd?: () => void;
}

export default function ApiPlaygroundRequestSubtitle(
  props: ApiPlaygroundSubtitleProps
) {
  // input props
  const { title, subInfo, onAdd } = props;

  return (
    <div className="flex items-center gap-2 border-b border-b-[#EDEDED] mb-2 px-2 pb-1">
      <span className="text-[#212121] text-sm font-bold break-words">
        {title}
      </span>
      {subInfo && <i className="text-gray-400 font-light text-sm">{subInfo}</i>}
      {onAdd && (
        <button
          className="ml-auto p-1 hover:bg-gray-300 hover:rounded-full"
          onClick={onAdd}
        >
          <BiPlus />
        </button>
      )}
    </div>
  );
}
