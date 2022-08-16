import { useState } from "react";

import {
  ItemContainer,
  ItemWrapper,
  ItemWrapperGroup,
  ItemTitleGroup,
  Item,
  ItemName,
  ItemArrow,
  ItemsWrapper,
  ChildItem
} from "./SidebarStyles";

import { ArrowIcon } from "../Icons";

const SidebarItem = (props) => {
  const { icon, group, childItems, name, displaySidebar } = props;
  const [active, setActive] = useState(null);

  const handleClick = (e, index) => {
    e.preventDefault();
    setActive(index);
  }

  console.log(active);

  if (group) {
    return (
      <ItemContainer>
        <ItemWrapperGroup>
          <ItemTitleGroup>
            <Item>
              {icon}
              <ItemName displaySidebar={displaySidebar}>{name}</ItemName>
            </Item>
            <ItemArrow displaySidebar={displaySidebar}>
              <ArrowIcon />
            </ItemArrow>
          </ItemTitleGroup>
          <ItemsWrapper displaySidebar={displaySidebar}>
            {childItems.map(
              (item, index) => item && <ChildItem onClick={(e) => handleClick(e, index)} key={index}>{item}</ChildItem>
            )}
          </ItemsWrapper>
        </ItemWrapperGroup>
      </ItemContainer>
    );
  } else {
    return (
      <ItemContainer>
        <ItemWrapper>
          {icon}
          <ItemName displaySidebar={displaySidebar}>{name}</ItemName>
        </ItemWrapper>
      </ItemContainer>
    );
  }
};

export default SidebarItem;
