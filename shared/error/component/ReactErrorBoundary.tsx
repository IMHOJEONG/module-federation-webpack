import { ErrorBoundary } from "react-error-boundary";

export default function Component(props: any) {
  console.log(props);
  return (
    <ErrorBoundary fallback={<div>Something went Wrong!!</div>}>
      {props.children}
    </ErrorBoundary>
  );
}
