import Layout from "@/pages/Layout";
import ErrorBoundary from "error/ErrorBoundary";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppointmentDashboard from "ui/search/AppointmentDashboard";
// import ExecutiveDashboard from "ui/search/ExecutiveDashboard";
// // import FileDashboard from "ui/search/FileDashboard";
// import FinancialDashboard from "ui/search/FinancialDashboard";
// import JobDashboard from "ui/search/JobDashboard";
// import LogisticsDashboard from "ui/search/LogisticsDashboard";
// import SupportDashboard from "ui/search/SupportDashboard";

// // const Login = React.lazy(() => import("auth/Login"));
// const AppointmentDashboard = React.lazy(
//   () => import("ui/search/AppointmentDashboard")
// );
// const ExecutiveDashboard = React.lazy(
//   () => import("ui/search/ExecutiveDashboard")
// );
// const FileDashboard = () => import("ui/search/FileDashboard");
// const FinancialDashboard = React.lazy(
//   () => import("ui/search/FinancialDashboard")
// );

// const JobDashboard = React.lazy(() => import("ui/search/JobDashboard"));

// const LogisticsDashboard = React.lazy(
//   () => import("ui/search/LogisticsDashboard")
// );

// const SupportDashboard = React.lazy(() => import("ui/search/SupportDashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        path: "/",

        async lazy() {
          let { FileDashboard } = await import("ui/search");
          return { Component: FileDashboard };
        },
      },
      {
        path: "/appointment",
        async lazy() {
          let { AppointmentDashboard } = await import("ui/search");
          return { Component: AppointmentDashboard };
        },
      },
      {
        path: "/executive",
        async lazy() {
          let { ExecutiveDashboard } = await import("ui/search");
          return { Component: ExecutiveDashboard };
        },
      },
      {
        path: "/logistics",
        async lazy() {
          let { LogisticsDashboard } = await import("ui/search");
          return { Component: LogisticsDashboard };
        },
      },
      {
        path: "/support",
        async lazy() {
          let { SupportDashboard } = await import("ui/search");
          return { Component: SupportDashboard };
        },
      },
      {
        path: "/job-dashboard",
        async lazy() {
          let { JobDashboard } = await import("ui/search");
          return { Component: JobDashboard };
        },
      },
      {
        path: "/financial",
        async lazy() {
          let { FinancialDashboard } = await import("ui/search");
          return { Component: FinancialDashboard };
        },
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
