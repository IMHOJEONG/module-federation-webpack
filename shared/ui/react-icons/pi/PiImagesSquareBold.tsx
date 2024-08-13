import { twMerge } from "tailwind-merge";

interface PiImagesSquareBoldProps {
  className?: string;
}

export default function PiImagesSquareBold({
  className,
}: PiImagesSquareBoldProps) {
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
      <path d="M208,28H88A20,20,0,0,0,68,48V60H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V188h12a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,52H204v59.72l-9.86-9.86a20,20,0,0,0-28.28,0L103.72,164H92Zm80,152H52V84H68v84a20,20,0,0,0,20,20h84Zm-34.34-40L180,121.66l24,24V164ZM108,88a20,20,0,1,1,20,20A20,20,0,0,1,108,88Z"></path>
    </svg>
  );
}
