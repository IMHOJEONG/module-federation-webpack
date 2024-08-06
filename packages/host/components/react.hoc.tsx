// import Spinner from "ui/Spinner";
import { FC, SuspenseProps, Suspense } from "react";

export function withSuspense<WrappedProps extends Object>(
  WrappedComponent: FC<WrappedProps>,
  suspenseProps: SuspenseProps = {
    fallback: <div>loading...</div>,
  }
): FC<WrappedProps> {
  function WrapperComponent(props: WrappedProps) {
    return (
      <Suspense {...suspenseProps}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  }
  return WrapperComponent;
}
