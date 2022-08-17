import {
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";

const SidebarItem = (props) => {
  const { icon, name, displaySidebar } = props;

    return (
      <ItemContainer>
        <ItemWrapper>
          {icon}
          <ItemName displaySidebar={displaySidebar}>{name}</ItemName>
        </ItemWrapper>
      </ItemContainer>
    );
};

export default SidebarItem;
