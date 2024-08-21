import { Carousel } from "flowbite-react";
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.webp";
import banner3 from "../../assets/images/banner3.webp";
import banner4 from "../../assets/images/banner4.webp";
import { SliderImage } from "../common/sliderImage/slider-image.components";
export const Slider = () => {
  return (
    <>
      <div className="h-[500px]">
        <Carousel slideInterval={5000}>
          <SliderImage
            image={banner1}
            alt="image1"
            link="/banner1"
          ></SliderImage>
          <SliderImage
            image={banner2}
            alt="image2"
            link="/banner2"
          ></SliderImage>
          <SliderImage
            image={banner3}
            alt="image3"
            link="/banner3"
          ></SliderImage>
          <SliderImage
            image={banner4}
            alt="image4"
            link="/banner4"
          ></SliderImage>
        </Carousel>
      </div>
    </>
  );
};
