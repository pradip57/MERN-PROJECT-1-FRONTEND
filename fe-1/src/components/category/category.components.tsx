import HomeTitle from "../../components/common/title/home-title.components";
import { GridListsCategoryHomepage } from "../common/grid-lists-category/grid-lists-category.components";
import FurnitureCategory from "../../assets/images/categoryimage/furnitures_category.png";
import ClothesCategory from "../../assets/images/categoryimage/clothes-category.png";
import ElectronicCategory from "../../assets/images/categoryimage/electronics_category.png";
import UtensilsCategory from "../../assets/images/categoryimage/utensils-category.png";
const CategoryListHomepage = () => {
  return (
    <>
      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Shop By Categories" link="/categories" />
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GridListsCategoryHomepage
              title=""
              alt=""
              slug=""
              link="/furnitures"
              image={FurnitureCategory}
            />
            <GridListsCategoryHomepage
              title=""
              alt=""
              slug=""
              link="/electronics"
              image={ElectronicCategory}
            />
            <GridListsCategoryHomepage
              title=""
              alt=""
              slug=""
              link="/clothes"
              image={ClothesCategory}
            />
            <GridListsCategoryHomepage
              title=""
              alt=""
              slug=""
              link="/utensils"
              image={UtensilsCategory}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryListHomepage;
