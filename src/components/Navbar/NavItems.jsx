import { useState } from "react";
import { NavList, ItemIndex } from "./NavbarElements";

const NavItems = (props) => {
  const { data } = props;
  const [active, setActive] = useState(0);

  return (
    <NavList>
      {data?.map((item, index) => (
        <li
          key={index}
          className={active === index ? "active" : undefined}
          onClick={() => setActive(index)}
        >
          <ItemIndex>0{index}</ItemIndex>
          {item}
        </li>
      ))}
    </NavList>
  );
};

export default NavItems;
