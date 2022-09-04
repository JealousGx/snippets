import React from "react";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";
import { NavContainer, NavLogoWrapper } from "./NavbarElements";

import Logo from "../../assets/logo.svg";

const NAV_ITEMS = ["home", "destination", "crew", "technology"];

const Navbar = () => {
  let MOBILE_VIEW = window.innerWidth < 640;
  let TABLET_VIEW = window.innerWidth <= 768;

  return (
    <NavContainer>
      <NavLogoWrapper>
        <img src={Logo} alt="Logo" />
      </NavLogoWrapper>
      {!TABLET_VIEW && <hr className="line" />}
      {MOBILE_VIEW ? (
        <MobileNavItems data={NAV_ITEMS} />
      ) : (
        <NavItems data={NAV_ITEMS} />
      )}
    </NavContainer>
  );
};

export default Navbar;
