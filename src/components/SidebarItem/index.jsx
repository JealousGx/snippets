import { ItemContainer, ItemWrapper } from "./ItemStyles";

const SidebarItem = (props) => {
  const { icon, group, name, displaySidebar } = props;
  if (group) {
    return (
      <ItemContainer>
        <ItemWrapper>
          {icon}
          {name}
        </ItemWrapper>
      </ItemContainer>
    );
  } else {
    return (
      <ItemContainer>
        <ItemWrapper group={true}>
          {icon}
          {name}
        </ItemWrapper>
      </ItemContainer>
    );
  }
};

export default SidebarItem;
