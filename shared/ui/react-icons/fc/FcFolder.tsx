import { twMerge } from "tailwind-merge";

interface FcFolderProps {
  className?: string;
}

export default function FcFolder({ className }: FcFolderProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#FFA000"
        d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"
      ></path>
      <path
        fill="#FFCA28"
        d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"
      ></path>
    </svg>
  );
}
