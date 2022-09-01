import { NavList } from "./NavbarElements";

const NAV_ITEMS = ["home", "destination", "crew", "technology"];

const NavItems = () => {
  return (
    <NavList>
      {NAV_ITEMS.map((item, index) => (
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
    </NavList>
  );
};

export default NavItems;
