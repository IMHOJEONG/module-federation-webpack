import { twMerge } from "tailwind-merge";

interface PiCurrencyDollarBoldProps {
  className?: string;
}

export default function PiCurrencyDollarBold({
  className,
}: PiCurrencyDollarBoldProps) {
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
      <path d="M152,116H140V60h4a28,28,0,0,1,28,28,12,12,0,0,0,24,0,52.06,52.06,0,0,0-52-52h-4V24a12,12,0,0,0-24,0V36h-4a52,52,0,0,0,0,104h4v56H104a28,28,0,0,1-28-28,12,12,0,0,0-24,0,52.06,52.06,0,0,0,52,52h12v12a12,12,0,0,0,24,0V220h12a52,52,0,0,0,0-104Zm-40,0a28,28,0,0,1,0-56h4v56Zm40,80H140V140h12a28,28,0,0,1,0,56Z"></path>
    </svg>
  );
}
