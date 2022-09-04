import { useState } from "react";
import { NavList } from "./NavbarElements";

const NavItems = (props) => {
  const { data } = props;
  const [active, setActive] = useState(null);
  let TABLET_VIEW = window.innerWidth <= 768;

  return (
    <NavList>
      {data?.map((item, index) => (
        <li
          key={index}
          className={active === index ? "active" : undefined}
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
