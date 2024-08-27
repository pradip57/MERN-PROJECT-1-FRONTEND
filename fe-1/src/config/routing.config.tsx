import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home.pages";
import CategoriesPage from "../pages/categories/categories.pages";
import BrandsPage from "../pages/brands/brands.pages";
import NotFound404 from "../pages/errors/notfound404.pages";
import CategoriesDetailPage from "../pages/categories/category-details.pages";
import LoginForm from "../components/auth/loginform/loginform.components";
import HomePageLayout from "../pages/layouts/home-layouts.pages";
import AdminLayout from "../pages/layouts/admin-layouts.pages";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="categories" element={<CategoriesPage />}></Route>
            <Route
              path="category-details/:slug"
              element={<CategoriesDetailPage />}
            ></Route>
            <Route path="brands" element={<BrandsPage />}></Route>
            <Route path="login" element={<LoginForm />}></Route>

            <Route path="*" element={<NotFound404 />}></Route>
          </Route>

          <Route path="/admin" element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
