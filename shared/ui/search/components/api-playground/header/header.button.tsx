import { ReactNode, HTMLAttributes } from 'react';
import { cn, Tooltip } from 'rizzui';

interface HeaderButtonProps extends HTMLAttributes<HTMLButtonElement> {
  Icon: ReactNode;
  tooltip?: string;
}

export default function ApiPlaygroundHeaderButton(props: HeaderButtonProps) {
  // input props
  const { Icon, onClick, className, tooltip } = props;

  const Base = (
    <button
      className={cn(
        'py-3 px-4 bg-gray-200 rounded-md hover:bg-opacity-70 active:bg-gray-300',
        className
      )}
      onClick={onClick}
    >
      {Icon}
    </button>
  );

  return (
    <>
      {!!tooltip && <Tooltip content={tooltip}>{Base}</Tooltip>}
      {!tooltip && Base}
    </>
  );
}
