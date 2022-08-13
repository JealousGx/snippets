import styled from "styled-components";

export const ItemContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 0.25rem;

  &:hover {
    background: #eaeced;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ group }) => group && "justify-content: space-between;"}
  flex-direction: row;
`;

export const ItemName = styled.span`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.1rem" : "0")};
`;
