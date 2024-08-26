import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home.pages";
import CategoriesPage from "../pages/categories/categories.pages";
import BrandsPage from "../pages/brands/brands.pages";
import NotFound404 from "../pages/errors/notfound404.pages";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/categories" element={<CategoriesPage />}></Route>
          <Route path="/brands" element={<BrandsPage />}></Route>

          <Route path="*" element={<NotFound404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
