import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MovieCard } from "@/Types";
import Card from "./card";
import Banner from "./Banner";
type Props = {
  BannerData: [MovieCard];
};
const BannerSlider: React.FC<Props> = ({ BannerData }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {BannerData.map((item) => (
          <SwiperSlide key={item?.image}>
            <Banner image={item?.image} title={item?.title} id={item?.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;