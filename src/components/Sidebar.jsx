import { useState } from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarToggler
} from "./SidebarStyles";
import BrandLogo from "./BrandLogo.svg";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Sidebar() {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <SidebarContainer displaySidebar={displaySidebar}>
      <SidebarWrapper>
        <SidebarLogoWrapper displaySidebar={displaySidebar}>
          <SidebarLogo href="#" displaySidebar={displaySidebar}>
            <span className="app-brand-logo demo">
              <img src={BrandLogo} alt="Brand logo" />
            </span>
            <span className="app__brand__text">Frest</span>
          </SidebarLogo>
          <SidebarToggler onClick={handleSidebarDisplay}>
            <div className="outer__circle">
              <div className="inner__circle" />
            </div>
          </SidebarToggler>
        </SidebarLogoWrapper>
        Test
      </SidebarWrapper>
    </SidebarContainer>
  );
}
