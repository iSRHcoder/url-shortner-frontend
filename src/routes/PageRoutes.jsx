import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import route from "./route.json";
import MainLayout from "./../layouts/MainLayout";
import HomePage from "./../pages/HomePage";
import EmptyDiv from "../pages/EmptyDiv";
import VisitedUrlsPage from "../pages/VisitedUrlsPage";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":urlId" element={<EmptyDiv />} />
          <Route path={route.ALL_URLS} element={<VisitedUrlsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
