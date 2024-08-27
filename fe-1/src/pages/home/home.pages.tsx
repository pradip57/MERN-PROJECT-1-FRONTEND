import React from "react";

import HomeTitle from "../../components/common/title/home-title.components";
import { Slider } from "../../components/slider/slider.components";
import { Search } from "../../components/search/search.components";

import CategoryList from "../../components/category/category.components";
import { BrandListHomepage } from "../../components/brand/brandlist.components";
import ProductListHomePage from "../../components/products/product-list.components";


const HomePage: React.FC = () => {
  return (
    <>
      

      <Search />

      <Slider />
      <CategoryList />
      <BrandListHomepage />

      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Product Lists" link="/products" />
        <ProductListHomePage />
      </div>
    </>
  );
};
export default HomePage;
