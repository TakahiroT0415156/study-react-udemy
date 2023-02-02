import { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../Components/Pages/Login";
import { Page404 } from "../Components/Pages/Page404";
import { LoginUserProvider } from "../Components/providers/LoginUserProvider";
import { HeaderLayout } from "../Components/templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";

export const Router = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        {HomeRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/home${route.path}`}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
