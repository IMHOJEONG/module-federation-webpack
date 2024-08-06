import React, { useEffect } from "react";
import { Suspense } from "react";
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import useUserStore from "zustand/useUserStore";
import useDarkThemeStore from "zustand/useDarkThemeStore";
import ProtectedRoute from "../router/ProtectedRoute";
// import Spinner from "ui/Spinner";
// import SearchLayout from "ui/search/Layout";

const SearchLayout = React.lazy(() => import("ui/search/Layout"));

export default function Layout() {
  const navigate = useNavigate();

  const { user, handleLogin, handleLogout } = useUserStore();

  const updateStore = () => {
    useUserStore.persist.rehydrate();
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", updateStore);
    window.addEventListener("focus", updateStore);
    return () => {
      document.removeEventListener("visibilitychange", updateStore);
      window.removeEventListener("focus", updateStore);
    };
  }, []);

  return (
    <ProtectedRoute user={user}>
      <Suspense fallback={<div>loading...</div>}>
        {/* <Theme> */}
        <SearchLayout>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
          <div></div>
        </SearchLayout>
      </Suspense>
    </ProtectedRoute>
  );
}
