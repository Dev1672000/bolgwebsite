import React from "react";
import NavBar from "./NavBarWeb";
import NavbarBottom from "./NavbarBottom";
import NavBarMobile from "./NavBarMobile";

const NavBarComponents = () => {
  return (
      <div className="shadow-md">
        <NavBarMobile />
        <NavBar />
        <NavbarBottom />
      </div>
  );
};

export default NavBarComponents;
