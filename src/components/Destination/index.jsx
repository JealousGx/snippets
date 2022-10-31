import { useState } from "react";
import Item from "./Item";

import { Container } from "./DestinationStyles";

import { DestinationData } from "./data";

const Destination = () => {
  const [active, setActive] = useState(0);

  return (
    <Container>
      <h5>
        <span>01</span> pick your destination
      </h5>
      {DestinationData?.map((data, id) => (
        <Item
          key={id}
          display={active === id} // display the active tab
          image={data.image}
          title={data.title}
          description={data.description}
          distance={data.distance}
          travelTime={data.travelTime}
          setActive={setActive}
        />
      ))}
    </Container>
  );
};

export default Destination;
