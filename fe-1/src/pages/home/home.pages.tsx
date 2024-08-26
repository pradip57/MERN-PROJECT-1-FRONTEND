import React from "react";

import HomeTitle from "../../components/common/title/home-title.components";
import { Slider } from "../../components/slider/slider.components";
import { Search } from "../../components/search/search.components";
import HomeHeader from "../../components/header/home-header.components";
import CategoryList from "../../components/category/category.components";
import { BrandListHomepage } from "../../components/brand/brandlist.components";
import LoginForm from "../../components/auth/loginform/loginform.components";
const HomePage: React.FC = () => {
  return (
    <>
      <HomeHeader />

      <Search />

      <Slider />
      <CategoryList />
      <BrandListHomepage />

      <LoginForm />

      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Product Lists" link="/products" />
      </div>
    </>
  );
};
export default HomePage;
