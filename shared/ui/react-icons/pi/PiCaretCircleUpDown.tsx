import { twMerge } from "tailwind-merge";

interface PiCaretCircleUpDownProps {
  className?: string;
}

export default function PiCaretCircleUpDown({
  className,
}: PiCaretCircleUpDownProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM165.66,98.34a8,8,0,0,1-11.32,11.32L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0Zm0,48a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35A8,8,0,0,1,165.66,146.34Z"></path>
    </svg>
  );
}
