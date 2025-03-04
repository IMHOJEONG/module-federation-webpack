import { twMerge } from "tailwind-merge";

interface HiOutlineAdjustmentsHorizontalProps {
  className?: string;
}

export default function HiOutlineAdjustmentsHorizontal({
  className,
}: HiOutlineAdjustmentsHorizontalProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      ></path>
    </svg>
  );
}
