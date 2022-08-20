import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";
import BrandLogo from "./BrandLogo.svg";

import { dummyData } from "..";

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [activeItem, setActiveItem] = useState(0);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <span className="app-brand-logo demo">
                <img src={BrandLogo} alt="Brand logo" />
              </span>
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                Frest
              </SidebarBrand>
            </SidebarLogo>
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <ItemsList>
            {dummyData.map((itemData, index) => (
              <ItemContainer
                key={index}
                onClick={() => setActiveItem(itemData.id)}
                className={activeItem === itemData.id ? "active" : ""}
              >
                <Link to={itemData.path}>
                  <ItemWrapper>
                    {itemData.icon}
                    <ItemName displaySidebar={displaySidebar}>
                      {itemData.name}
                    </ItemName>
                  </ItemWrapper>
                </Link>
              </ItemContainer>
            ))}
          </ItemsList>
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}
