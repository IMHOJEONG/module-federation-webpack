import { twMerge } from "tailwind-merge";

interface PiCaretDoubleDownDuotoneProps {
  className?: string;
}

export default function PiCaretDoubleDownDuotone({
  className,
}: PiCaretDoubleDownDuotoneProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 256 256"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M208,56l-80,80L48,56Z" opacity="0.2"></path>
      <path d="M213.66,141.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,204.69l74.34-74.35a8,8,0,0,1,11.32,11.32Zm-171.32-80A8,8,0,0,1,48,48H208a8,8,0,0,1,5.66,13.66l-80,80a8,8,0,0,1-11.32,0Zm25,2.34L128,124.69,188.69,64Z"></path>
    </svg>
  );
}
