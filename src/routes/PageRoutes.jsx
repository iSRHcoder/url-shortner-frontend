import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import route from "./route.json";
import MainLayout from "./../layouts/MainLayout";
import HomePage from "./../pages/HomePage";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":urlId" element={<HomePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
