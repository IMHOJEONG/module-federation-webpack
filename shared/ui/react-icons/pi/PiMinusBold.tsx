import { twMerge } from "tailwind-merge";

interface PiMinusBoldProps {
  className?: string;
}

export default function PiMinusBold({ className }: PiMinusBoldProps) {
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
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
    </svg>
  );
}
