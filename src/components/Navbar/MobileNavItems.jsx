import React, { useState } from "react";

import {
  MobileContainer,
  MobileIconWrapper,
  MobileList,
} from "./NavbarElements";

import Hamburger from "../../assets/icon-hamburger.svg";
import CloseIcon from "../../assets/icon-close.svg";

const MobileNavItems = (props) => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarIsOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <MobileContainer>
      <MobileIconWrapper onClick={handleNavbarIsOpen}>
        <img src={!isOpen ? Hamburger : CloseIcon} alt="Hamburger" />
      </MobileIconWrapper>
      <MobileList className={isOpen && "active"}>
        {data?.map((item, index) => (
          <li key={index}>
            <span
              style={{
                marginRight: "0.5rem",
                fontWeight: "bold",
              }}
            >
              0{index}
            </span>
            {item}
          </li>
        ))}
      </MobileList>
    </MobileContainer>
  );
};

export default MobileNavItems;
