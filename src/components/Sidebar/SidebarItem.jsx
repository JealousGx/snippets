import { ItemContainer, ItemWrapper, ItemName } from "./SidebarStyles";

const SidebarItem = ({ className, itemData, displaySidebar }) => {
  const { icon, name } = itemData;

  return (
    <ItemContainer className={className && className}>
      <ItemWrapper>
        {icon}
        <ItemName displaySidebar={displaySidebar}>{name}</ItemName>
      </ItemWrapper>
    </ItemContainer>
  );
};

export default SidebarItem;
