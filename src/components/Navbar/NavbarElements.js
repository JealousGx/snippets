import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-top: 2rem;
  padding-left: 2rem;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 1.5rem;
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
      width: 38px;
      height: 38px;
    }
  }
`;

// Desktop List Items
const NavList = styled.ol`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 1.7px;
  padding: 0 8rem 0 6rem;
  display: none;
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

  @media (min-width: 640px) {
    display: flex;
  }
`;

// Remove the indices for tablet view
const ItemIndex = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;

  @media (min-width: 640px) and (max-width: 1024px) {
    display: none;
  }
`;

// Mobile Items
const MobileContainer = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

const MobileIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;

  img {
    color: #fff;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
      color: #979797;
    }
  }
`;

const MobileList = styled.ol`
  position: absolute;
  top: 0;
  right: 0;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 1.7px;
  width: 16rem;
  height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: rgba(151, 151, 151, 0.1);
  backdrop-filter: blur(16px);
  text-transform: uppercase;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  transform: translateX(100%);
  opacity: 0;
  transition: all 250ms ease;

  li {
    cursor: pointer;
    transition: color 250ms ease;

    &:hover {
      color: #979797;
    }
  }

  &.active {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export {
  NavContainer,
  NavLogoWrapper,
  NavList,
  ItemIndex,
  MobileContainer,
  MobileIconWrapper,
  MobileList,
};
