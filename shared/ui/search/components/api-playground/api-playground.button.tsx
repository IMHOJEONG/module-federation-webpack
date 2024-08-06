import { HTMLAttributes, PropsWithChildren } from 'react';
import { Button, cn } from 'rizzui';

interface ApiPlaygroundButtonProps
  extends PropsWithChildren<
    Omit<
      HTMLAttributes<HTMLButtonElement>,
      'onClick' | 'onKeyDown' | 'role' | 'tabIndex' | 'color'
    >
  > {
  onAction: () => void;
  disabled?: boolean;
}

export const ApiPlaygroundButtonClassName =
  'rounded-md shadow-sm hover:shadow-md active:shadow-lg bg-gray-200 active:bg-gray-300';

export default function ApiPlaygroundButton(props: ApiPlaygroundButtonProps) {
  // input props
  const { onAction, children, className, disabled, ...rest } = props;

  return (
    <Button
      className={cn(ApiPlaygroundButtonClassName, className)}
      size="sm"
      variant="flat"
      as="span"
      role="button"
      onClick={onAction}
      tabIndex={0}
      disabled={disabled}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onAction();
        }
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
