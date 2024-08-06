import React, { Suspense, lazy } from "react";
import { Loader } from "rizzui";

const NoSSR = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ({ children }: React.PropsWithChildren<{}>) {
  return (
    <Suspense fallback={<Loader variant="spinner" size="lg" />}>
      <NoSSR>{children}</NoSSR>
    </Suspense>
  );
}
