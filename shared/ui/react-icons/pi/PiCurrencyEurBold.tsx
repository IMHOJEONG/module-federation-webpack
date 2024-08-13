import { twMerge } from "tailwind-merge";

interface PiCurrencyEurBoldProps {
  className?: string;
}

export default function PiCurrencyEurBold({
  className,
}: PiCurrencyEurBoldProps) {
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
      <path d="M192.94,189.66a12,12,0,0,1-.94,17A84,84,0,0,1,53.55,160H40a12,12,0,0,1,0-24H52V120H40a12,12,0,0,1,0-24H53.55A84,84,0,0,1,192,49.39a12,12,0,0,1-16,17.89A60,60,0,0,0,78.18,96H136a12,12,0,0,1,0,24H76v16h44a12,12,0,0,1,0,24H78.18A60,60,0,0,0,176,188.72,12,12,0,0,1,192.94,189.66Z"></path>
    </svg>
  );
}
