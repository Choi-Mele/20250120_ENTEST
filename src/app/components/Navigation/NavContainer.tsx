import React from 'react';

const NavContainer = ({ children }: { children: React.ReactNode }) => {

  return (
    <ul className="c_nav_container">
      {children}
    </ul>
  );
};

export default NavContainer;