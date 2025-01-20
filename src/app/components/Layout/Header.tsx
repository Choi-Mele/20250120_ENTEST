import React from "react";
import NavContainer from "../Navigation/NavContainer";
import NavItem from "../Navigation/NavItem";
import Image from "next/image";

const Header = () => {
  return (
    <header className="c_header">
      <div className="c_logo">
        <Image src="/assets/image/logo.svg" alt="en_media_logo" width={100} height={100} />
      </div>
      <NavContainer>
        <NavItem label="Home" href="/" />
        <NavItem label="About" href="/about" />
        <NavItem label="Contact" href="/contact" />
      </NavContainer>
    </header>
  );
};

export default Header;
