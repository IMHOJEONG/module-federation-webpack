import { twMerge } from "tailwind-merge";

interface PiNoteBlankProps {
  className?: string;
}

export default function PiNoteBlank({ className }: PiNoteBlankProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.86,15.86,0,0,0,168,219.31L219.31,168A15.86,15.86,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM48,48H208V152H160a8,8,0,0,0-8,8v48H48ZM196.69,168,168,196.69V168Z"></path>
    </svg>
  );
}
