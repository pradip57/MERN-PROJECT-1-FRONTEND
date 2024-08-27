import { GridListsBrandHomepage } from "../common/grid-lists-brands/grid-lists-brand.components";
import HomeTitle from "../common/title/home-title.components";
import applebrand from "../.././assets/images/brandimages/applebrand.png";
import nikebrand from "../.././assets/images/brandimages/nikebrand.png";
import pumabrand from "../.././assets/images/brandimages/pumabrand.png";
import vansbrand from "../.././assets/images/brandimages/vansbrand.png";
import samsungbrand from "../.././assets/images/brandimages/samsungbrand.png";
import lgbrand from "../.././assets/images/brandimages/lgbrand.png";
import dellbrand from "../.././assets/images/brandimages/dellbrand.png";
export const BrandListHomepage = () => {
  return (
    <>
      <div className="bg-[#e8e5e5] my-8">
        <HomeTitle title="Shop By Brands" link="/brands" />

        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="grid grid-cols-4  gap-8 text-gray-500 sm:gap-12 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 dark:text-gray-400">
            <GridListsBrandHomepage
              image={applebrand}
              title=""
              slug=""
              alt=""
              link=""
            />
            <GridListsBrandHomepage
              image={nikebrand}
              title=""
              slug=""
              alt=""
              link=""
            />
            <GridListsBrandHomepage
              image={pumabrand}
              title=""
              slug=""
              alt=""
              link=""
            />
            <GridListsBrandHomepage
              image={vansbrand}
              title=""
              slug=""
              alt=""
              link=""
            />
            <GridListsBrandHomepage
              image={samsungbrand}
              title=""
              slug=""
              alt=""
              link=""
            />
            <GridListsBrandHomepage
              image={lgbrand}
              title=""
              slug=""
              alt=""
              link=""
            />
            <GridListsBrandHomepage
              image={dellbrand}
              title=""
              slug=""
              alt=""
              link=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
