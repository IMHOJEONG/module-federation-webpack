import { useAutoResizeTextArea } from '@/util/hooks/useAutoResizeTextarea';
import { HTMLAttributes, useEffect, useState } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';
import cn from '@utils/class-names';

interface RequestTextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

export default function ApiPlaygroundRequestTextArea(
  props: RequestTextAreaProps
) {
  // input props
  const { value, className, onChange, ...rest } = props;

  // hooks
  const textAreaRef = useAutoResizeTextArea(value);

  return (
    <div className="relative group">
      <textarea
        ref={textAreaRef}
        className={cn(
          'w-full pr-8 outline-none border-none bg-gray-100 rounded-md text-xs resize-none custom-scrollbar max-h-96',
          className
        )}
        value={value}
        readOnly={onChange ? false : true}
        onChange={onChange}
        {...rest}
      />
      <button
        type="button"
        className="inline-block absolute right-2 top-4 -translate-y-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-300 p-1 z-10 hover:bg-gray-400/20 active:bg-gray-400/40 rounded-full"
        onClick={() => {
          navigator.clipboard.writeText(value);
        }}
      >
        <MdOutlineContentCopy />
      </button>
    </div>
  );
}
