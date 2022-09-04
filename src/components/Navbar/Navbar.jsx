import React from "react";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";
import { NavContainer, NavLogoWrapper } from "./NavbarElements";

import Logo from "../../assets/logo.svg";

const NAV_ITEMS = ["home", "destination", "crew", "technology"];

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogoWrapper>
        <img src={Logo} alt="Logo" />
      </NavLogoWrapper>
      <hr className="line" />
      <MobileNavItems data={NAV_ITEMS} />
      <NavItems data={NAV_ITEMS} />
    </NavContainer>
  );
};

export default Navbar;
