import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  gap: 5rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const HomeWrapper = styled.div`
  max-width: 380px;

  h5,
  h1 {
    text-transform: uppercase;
    font-weight: normal;
  }

  h1 {
    font-size: 150px;
    font-family: "Bellefair";
  }

  h5 {
    font-size: 28px;
    letter-spacing: 4.75px;
    color: #d0d6f9;
    font-family: "Barlow Condensed";
    white-space: nowrap;
  }

  p {
    font-size: 18px;
    color: #d0d6f9;
    font-family: "Barlow Condensed";
    line-height: 30px;
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    max-width: 320px;

    h1 {
      font-size: 102px;
    }

    h5 {
      font-size: 20px;
    }
  }
`;

const ExploreButton = styled.button`
  max-width: 100%;
  position: relative;
  background-color: #fff;
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  font-family: "Bellefair";
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    inset: 0;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(151, 151, 151, 0.35);
    border-radius: 50%;
    z-index: -1;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    transition: all 350ms linear;
  }

  &:hover {
    &:after {
      width: 22rem;
      height: 22rem;
    }
  }
`;

export { HomeContainer, HomeWrapper, ExploreButton };
