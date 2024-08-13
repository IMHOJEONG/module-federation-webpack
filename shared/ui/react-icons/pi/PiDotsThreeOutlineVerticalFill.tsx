import { twMerge } from "tailwind-merge";

interface PiDotsThreeOutlineVerticalFillProps {
  className?: string;
}

export default function PiDotsThreeOutlineVerticalFill({
  className,
}: PiDotsThreeOutlineVerticalFillProps) {
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
      <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z"></path>
    </svg>
  );
}
