import { HomeContainer, HomeWrapper, ExploreButton } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <h5>so, you want to travel to</h5>
        <h1>space</h1>
        <p>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </HomeWrapper>
      <ExploreButton>explore</ExploreButton>
    </HomeContainer>
  );
};

export default Home;
