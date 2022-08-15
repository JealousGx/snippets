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
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const SidebarToggler = styled.button`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const SidebarList = styled.div``;

// SidebarItem styles
export const ItemContainer = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  cursor: pointer;

  &:hover {
    background: #eaeced;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemWrapperGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemArrow = styled.span`
  display: ${({ displaySidebar }) => (displaySidebar ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.span`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

// Sidebar Container
export const SidebarContainer = styled.div`
  width: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;

  ${ItemWrapperGroup} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

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

      // Sidebar Item styles
      ${ItemWrapperGroup} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "space-between"};
      }

      ${ItemWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "flex-start"};
      }

      ${ItemName} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
        margin-left: ${({ displaySidebar }) => !displaySidebar && "0.5rem"};
      }

      ${ItemArrow} {
        display: ${({ displaySidebar }) => !displaySidebar && "flex"};
      }
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;
