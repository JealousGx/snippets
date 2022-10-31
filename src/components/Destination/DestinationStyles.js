import styled from "styled-components";

import BACKGROUND_IMAGE_DESKTOP from "../../assets/backgrounds/background-destination-desktop.jpg";

const Container = styled.section`
  width: 100%;
  background: url(${BACKGROUND_IMAGE_DESKTOP});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// Styles for Item component

const ItemContainer = styled.div`
  /* overflow: hidden; */
`;

const ImageWrapper = styled.div``;

const InfoWrapper = styled.div`
  div {
    display: flex;
    flex-direction: row;
  }
`;

const List = styled.div`
  margin-right: 1rem;
  width: max-content;
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: border 250ms ease;

  &:hover {
    border-bottom: 2px solid #979797;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }
`;

export { Container, ItemContainer, ImageWrapper, InfoWrapper, List };
