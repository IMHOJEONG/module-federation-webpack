import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import QueryProvider from "reactQuery/queryClient";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
