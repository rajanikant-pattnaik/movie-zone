import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MovieCard } from "@/Types";
import Card from "./Card";

type BannerSliderProps = {
  BannerData: MovieCard[];
};

const BannerSlider: React.FC<BannerSliderProps> = ({ BannerData }) => {
  return (
    <div className="p-4 md:p-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="flex flex-wrap">
        {BannerData.map((item) => (
          <SwiperSlide key={item?.image}>
            <Card
              image={item?.image}
              title={item?.title}
              id={item?.id}
              type={item?.type}
            />
          </SwiperSlide>
        ))}
        </div>
        
      </Swiper>
    </div>
  );
};

export default BannerSlider;
