import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 2rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 0 0 2rem;
  }
`;

const NavLogoWrapper = styled.div`
  cursor: pointer;

  img {
    transform: scale(1);
    transition: transform 250ms ease;

    &:hover {
      transform: scale(0.75);
    }
  }

  @media (max-width: 468px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const NavList = styled.ol`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 1.7px;
  padding: 0 8rem 0 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 2rem;
    gap: 1rem;
    justify-content: space-between;
  }
`;

export { NavContainer, NavLogoWrapper, NavList };
