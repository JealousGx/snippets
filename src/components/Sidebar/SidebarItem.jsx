import {
  ItemContainer,
  ItemWrapper,
  ItemWrapperGroup,
  Item,
  ItemName,
  ItemArrow,
} from "./SidebarStyles";

import { ArrowIcon } from "../Icons";

const SidebarItem = (props) => {
  const { icon, group, name, displaySidebar } = props;
  if (group) {
    return (
      <ItemContainer>
        <ItemWrapperGroup>
          <Item>
            {icon}
            <ItemName displaySidebar={displaySidebar}>{name}</ItemName>
          </Item>
          <ItemArrow displaySidebar={displaySidebar}>
            <ArrowIcon />
          </ItemArrow>
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
