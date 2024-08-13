import { twMerge } from "tailwind-merge";

interface GoDotFillProps {
  className?: string;
}

export default function GoDotFill({ className }: GoDotFillProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
    </svg>
  );
}
