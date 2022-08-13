import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarLogoWrapper = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${({ displaySidebar }) =>
    displaySidebar ? "space-between" : "center"};
  align-items: center;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 468px) {
    display: none;
  }
`;

export const SidebarBrand = styled.span`
    display: ${({ displaySidebar }) =>
    displaySidebar ? "block" : "none"};
`

export const SidebarToggler = styled.button`
  cursor: pointer;
  display: ${({ displaySidebar }) =>
    displaySidebar ? "block" : "none"};
`;

export const SidebarList = styled.div``;

export const SidebarContainer = styled.div`
  width: ${({ displaySidebar }) =>
    displaySidebar ? "15rem" : "5rem"};
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;

  &:hover {
    @media (min-width: 468px) {
      width: ${({ displaySidebar }) => !displaySidebar && "15rem"};

      ${SidebarLogoWrapper} {
        justify-content: ${({ displaySidebar }) =>
    !displaySidebar && "space-between"};
      }

      ${SidebarBrand} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      ${SidebarToggler} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;