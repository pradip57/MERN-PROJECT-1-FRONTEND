import { Outlet } from "react-router-dom";
import HomeFooter from "../../components/footer/footer.components";
import HomeHeader from "../../components/header/home-header.components";

const HomePageLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </>
  );
};

export default HomePageLayout;
