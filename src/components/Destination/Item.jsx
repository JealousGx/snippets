import {
  ImageWrapper,
  InfoWrapper,
  ItemContainer,
  List,
} from "./DestinationStyles";

import { Titles } from "./data";

const Item = (props) => {
  const {
    display,
    image,
    title,
    description,
    distance,
    travelTime,
    setActive,
  } = props;

  if (!display) return null;

  return (
    <ItemContainer>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <div>
          {Titles?.map((title, id) => (
            <List key={id} onClick={() => setActive(id)}>
              {title}
            </List>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </InfoWrapper>
    </ItemContainer>
  );
};

export default Item;
