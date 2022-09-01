import NavItems from "./NavItems";
import { NavContainer, NavLogoWrapper } from "./NavbarElements";

import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogoWrapper>
        <img src={Logo} alt="Logo" />
      </NavLogoWrapper>
      <hr className="line" />
      <NavItems />
    </NavContainer>
  );
};

export default Navbar;
