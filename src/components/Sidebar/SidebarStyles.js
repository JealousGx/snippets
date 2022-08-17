import styled from "styled-components";

// Children Component
export const Children = styled.div`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};

  @media (max-width: 468px) {
    margin-left: 5rem;
  }
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
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

  &.active {
    background: #dbe4f3;
  }

  &:hover {
    background: #eaeced;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #7c7788;
`;

export const ItemWrapperGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

// Wrapper for the group items.
export const ItemsWrapper = styled.ul`
  padding: 0 2rem;
  width: 100%;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const ChildItem = styled.li`
  padding: 0.5rem 0;
  width: 100%;

  &.active {
    background: #dbe4f3;
  }

  &:hover {
    background: #eaeced;
  }
`;

export const ItemTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #7c7788;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const ItemName = styled.span`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  text-transform: capitalize;
`;

// Sidebar Container
export const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  width: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;
  ${({ displaySidebar }) =>
    displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};

  ${ItemTitleGroup} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

  &:hover {
    ${({ displaySidebar }) =>
      !displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};

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

      // Wrapper form group items.
      ${ItemsWrapper} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      // Sidebar Item styles
      ${ItemTitleGroup} {
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
    }
  }
 
::-webkit-scrollbar {
  width: 4px;
  height: 3px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #eaeced;

  &:hover {
    background: #D5E0F3;
  }
}

  @media (max-width: 468px) {
    width: 5rem;
  }
`;
