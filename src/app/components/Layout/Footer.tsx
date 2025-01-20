import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="c_footer">
      <div className="c_footer_content">
        <div className="c_footer_logo">
          <Image
            src="/assets/image/logo.svg"
            alt="en_media_logo"
            width={255}
            height={100}
          />
        </div>
        <p className="copyright">
          Copyright 2024 <b>테스트</b>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
