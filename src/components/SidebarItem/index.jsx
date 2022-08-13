import { ItemContainer, ItemWrapper } from "./ItemStyles";

import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const SidebarItem = (props) => {
  const { icon, group, name, displaySidebar } = props;
  if (group) {
    return (
      <ItemContainer>
        <ItemWrapper group={true}>
          <div>
            {icon}
            {name}
          </div>
          <ArrowRightOutlinedIcon />
        </ItemWrapper>
      </ItemContainer>
    );
  } else {
    return (
      <ItemContainer>
        <ItemWrapper>
          {icon}
          {name}
        </ItemWrapper>
      </ItemContainer>
    );
  }
};

export default SidebarItem;
