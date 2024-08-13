import { useAutoResizeTextArea } from "@/util/hooks/useAutoResizeTextarea";
import MdOutlineContentCopy from "react-icons/md/MdOutlineContentCopy";
import { HTMLAttributes } from "react";
import cn from "@utils/class-names";

interface ResponseTextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

export default function ApiPlaygroundResponseTextArea(
  props: ResponseTextAreaProps
) {
  // input props
  const { value, className, ...rest } = props;

  // hooks
  const textAreaRef = useAutoResizeTextArea(value);

  return (
    <div className="relative group flex items-center">
      <textarea
        ref={textAreaRef}
        className={cn(
          "w-full pr-8 outline-none border-none bg-white text-gray-800 rounded-md text-xs resize-none custom-scrollbar max-h-64",
          className
        )}
        value={value}
        readOnly
        {...rest}
      />
      <button
        type="button"
        className="inline-block absolute right-2 top-4 -translate-y-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-300 p-1 z-10 text-black hover:bg-gray-400/20 active:bg-gray-400/40 rounded-full"
        onClick={() => {
          navigator.clipboard.writeText(value);
        }}
      >
        <MdOutlineContentCopy />
      </button>
    </div>
  );
}
