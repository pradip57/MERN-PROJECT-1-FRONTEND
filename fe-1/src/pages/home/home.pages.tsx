import React from "react";

import HomeTitle from "../../components/common/title/home-title.components";
import { Slider } from "../../components/slider/slider.components";
import { Search } from "../../components/search/search.components";
import HomeHeader from "../../components/header/home-header.components";
const HomePage: React.FC = () => {
  return (
    <>
      <HomeHeader />

      <Search />

      <Slider />

      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Category Lists" link="/categories" />
      </div>
      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Brand Lists" link="/brands" />
      </div>
      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Product Lists" link="/products" />
      </div>
    </>
  );
};
export default HomePage;
