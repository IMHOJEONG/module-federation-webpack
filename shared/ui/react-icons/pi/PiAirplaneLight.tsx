import { twMerge } from "tailwind-merge";

interface PiAirplaneLightProps {
  className?: string;
}

export default function PiAirplaneLight({ className }: PiAirplaneLightProps) {
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
      <path d="M234.68,130.63,158,92.29V48a30,30,0,0,0-60,0V92.29L21.32,130.63A6,6,0,0,0,18,136v32a6,6,0,0,0,7.18,5.88L98,159.32v22.19L83.76,195.76A6,6,0,0,0,82,200v32a6,6,0,0,0,8.23,5.57L128,222.46l37.77,15.11A6,6,0,0,0,174,232V200a6,6,0,0,0-1.76-4.24L158,181.51V159.32l72.82,14.56A6,6,0,0,0,238,168V136A6,6,0,0,0,234.68,130.63ZM226,160.68l-72.82-14.56A6,6,0,0,0,146,152v32a6,6,0,0,0,1.76,4.24L162,202.49v20.65l-31.77-12.71a6,6,0,0,0-4.46,0L94,223.14V202.49l14.24-14.25A6,6,0,0,0,110,184V152a6,6,0,0,0-7.18-5.88L30,160.68v-21l76.68-38.34A6,6,0,0,0,110,96V48a18,18,0,0,1,36,0V96a6,6,0,0,0,3.32,5.37L226,139.71Z"></path>
    </svg>
  );
}
