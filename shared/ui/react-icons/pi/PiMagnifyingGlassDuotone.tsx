import { twMerge } from "tailwind-merge";

interface PiMagnifyingGlassDuotoneProps {
  className?: string;
}

export default function PiMagnifyingGlassDuotone({
  className,
}: PiMagnifyingGlassDuotoneProps) {
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
      <path
        d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
        opacity="0.2"
      ></path>
      <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
  );
}
