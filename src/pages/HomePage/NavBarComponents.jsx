import React from "react";
import NavBar from "../../components/NavBarWeb";
import NavbarBottom from "../../components/NavbarBottom";
import NavBarMobile from "../../components/NavBarMobile";
import BreakingNews from "../../components/BreakingNews";

const NavBarComponents = () => {
  return (
    <div>
      <div className="shadow-md">
        <NavBarMobile />
        <NavBar />
        <NavbarBottom />
      </div>
     
    </div>
  );
};

export default NavBarComponents;
