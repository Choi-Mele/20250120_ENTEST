"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

interface SwiperAreaProps {
  title: string;
  desc: string;
  imgSrc: string;
}

const SwiperArea = ({ data }: { data: SwiperAreaProps[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      loop={true}
      slidesPerView={1}
      className="c_swiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="c_swiper_item">
            <Image
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-auto"
              width={1920}
              height={1080}
            />
            <div className="swiper_text_content">
              <h2 className="swiper_title">{item.title}</h2>
              <p className="swiper_desc">{item.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperArea;
