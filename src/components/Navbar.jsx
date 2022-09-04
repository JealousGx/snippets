import React from "react";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";
import { NavContainer, NavLogoWrapper } from "./NavbarElements";

import Logo from "../assets/logo.svg";

import { MOBILE_VIEW } from "./helpers";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogoWrapper>
        <img src={Logo} alt="Logo" />
      </NavLogoWrapper>
      {!MOBILE_VIEW ? (
        <React.Fragment>
          <hr className="line" />
          <NavItems />
        </React.Fragment>
      ) : (
        <MobileNavItems />
      )}
    </NavContainer>
  );
};

export default Navbar;
