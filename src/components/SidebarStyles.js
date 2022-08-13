import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarLogoWrapper = styled.div`
  display: flex;
  justify-content: ${({ displaySidebar }) =>
    displaySidebar === true ? "space-between" : "center"};
  align-items: center;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: ${({ displaySidebar }) =>
    displaySidebar === true ? "flex" : "none"};
  align-items: center;

  @media (max-width: 468px) {
    display: none;
  }
`;

export const SidebarToggler = styled.button`
  cursor: pointer;
`;

export const SidebarList = styled.div``;

export const SidebarContainer = styled.div`
  width: ${({ displaySidebar }) =>
    displaySidebar === true ? "15rem" : "5rem"};
  height: 100vh;
  background: #f3f4f4;
  padding: 1.25rem;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;

  &:hover {
    @media (min-width: 468px) {
      width: ${({ displaySidebar }) => displaySidebar === false && "15rem"};

      ${SidebarLogoWrapper} {
        justify-content: ${({ displaySidebar }) =>
    displaySidebar === false && "space-between"};
      }

      ${SidebarLogo} {
        display: ${({ displaySidebar }) => displaySidebar === false && "flex"};
      }
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;