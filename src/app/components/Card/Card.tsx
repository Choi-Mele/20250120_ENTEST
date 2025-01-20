import React from "react";

interface CardProps {
  title: string;
  subTitle: string;
  desc: string;
  imgSrc: string;
}

const Card = ({ data }: { data: CardProps }) => {
  return (
    <div className="c_card">
      <img src={data.imgSrc} alt={data.title} className="c_card_img" />
      <div className="c_card_text_content">
        <h2 className="c_card_title">{data.title}</h2>
        <h3 className="c_card_sub_title">{data.subTitle}</h3>
        <p className="c_card_desc">{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
