import { twMerge } from "tailwind-merge";

interface PiCurrencyCircleDollarLightProps {
  className?: string;
}

export default function PiCurrencyCircleDollarLight({
  className,
}: PiCurrencyCircleDollarLightProps) {
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
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-70a26,26,0,0,1-26,26h-6v10a6,6,0,0,1-12,0V174H104a6,6,0,0,1,0-12h36a14,14,0,0,0,0-28H116a26,26,0,0,1,0-52h6V72a6,6,0,0,1,12,0V82h18a6,6,0,0,1,0,12H116a14,14,0,0,0,0,28h24A26,26,0,0,1,166,148Z"></path>
    </svg>
  );
}
