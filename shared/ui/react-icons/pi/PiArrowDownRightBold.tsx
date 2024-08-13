import { twMerge } from "tailwind-merge";

interface PiArrowDownRightBoldProps {
  className?: string;
}

export default function PiArrowDownRightBold({
  className,
}: PiArrowDownRightBoldProps) {
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
      <path d="M204,88V192a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h75L55.51,72.48a12,12,0,0,1,17-17L180,163V88a12,12,0,0,1,24,0Z"></path>
    </svg>
  );
}
