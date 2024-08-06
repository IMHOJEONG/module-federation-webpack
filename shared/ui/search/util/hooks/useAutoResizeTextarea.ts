import { useRef, useEffect } from 'react';

const baseHeight = '2rem';

export function useAutoResizeTextArea(msg?: string) {
  // ref
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const ref = textAreaRef.current;

    if (ref) {
      if (msg && msg.length > 0) {
        ref.style.height = baseHeight;
        ref.style.height = `${ref.scrollHeight}px`;
      } else {
        ref.style.height = baseHeight;
      }
    }
  }, [msg]);

  return textAreaRef;
}
