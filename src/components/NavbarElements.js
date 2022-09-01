import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 3rem 3rem;
  position: relative;
`;

const NavLogoWrapper = styled.div`
  cursor: pointer;

  img {
    transform: scale(1);
    transition: transform 250ms ease;
  }

  img {
    &:hover {
      transform: scale(0.75);
    }
  }
`;

const NavList = styled.ol`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 1.7px;
  padding: 0 22rem 0 10rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(151, 151, 151, 0.1);
  backdrop-filter: blur(8px);
  text-transform: uppercase;

  li {
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
      border-bottom: 2px solid #979797;
    }

    &.active {
      border-bottom: 2px solid #fff;
    }
  }
`;

export { NavContainer, NavLogoWrapper, NavList };
