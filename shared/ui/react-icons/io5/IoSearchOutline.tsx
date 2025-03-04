import { twMerge } from "tailwind-merge";

interface IoSearchOutlineProps {
  className?: string;
}

export default function IoSearchOutline({ className }: IoSearchOutlineProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="none"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
      ></path>
      <path
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M338.29 338.29 448 448"
      ></path>
    </svg>
  );
}
