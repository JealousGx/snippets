import { useState } from "react";
import { NavList } from "./NavbarElements";

import { NAV_ITEMS, TABLET_VIEW } from "./helpers";

const NavItems = () => {
  const [active, setActive] = useState(null);

  return (
    <NavList>
      {NAV_ITEMS.map((item, index) => (
        <li
          key={index}
          className={active === index && "active"}
          onClick={() => setActive(index)}
        >
          {!TABLET_VIEW && (
            <span
              style={{
                marginRight: "0.5rem",
                fontWeight: "bold",
              }}
            >
              0{index}
            </span>
          )}
          {item}
        </li>
      ))}
    </NavList>
  );
};

export default NavItems;
