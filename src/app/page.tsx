"use client";

import dynamic from "next/dynamic";
import Card from "./components/Card/Card";
import Image from "next/image";

const SwiperArea = dynamic(() => import("@/app/components/Swiper/SwiperArea"), {
  ssr: false,
});

export default function Main() {
  const swiperData = [
    {
      title: "Lorem ipsum dolor sit amet,",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgSrc: "/assets/image/main.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgSrc: "/assets/image/main.jpg",
    },
  ];

  const cardData = Array.from({ length: 4 }, (_, i) => ({
    title: "Lorem ipsum dolor sit amet,",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet,",
    imgSrc: `/assets/image/img${i + 1}.jpg`,
  }));

  return (
    <main className="c_main">
      <div className="section_1">
        <SwiperArea data={swiperData} />
      </div>
      <div className="section_2">
        <div className="card_wrapper">
          {cardData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="section_3">
        <div className="section_3_container">
          <h1 className="c_title">Location</h1>
          <div className="image_wrapper">
            <Image
              src="/assets/image/map.png"
              alt="map"
              width={800}
              height={100}
            />
          </div>
          <div className="info_wrapper">
            <h2 className="c_sub_title">address</h2>
            <p className="c_desc">
              서울특별시 강서구 강서로56가길 141 케이엠빌딩, 6층
            </p>
            <h2 className="c_sub_title">way to come</h2>
            <p className="c_desc">발산역 9번출구에서 300M 직진</p>
            <h2 className="c_sub_title">contact info</h2>
            <p className="c_desc">02-3429-3161</p>
          </div>
        </div>
      </div>
    </main>
  );
}
