import { HomeIcon, CalendarIcon, UserIcon } from "./Icons";

export const SIDEBAR_DATA = [
  {
    name: "Dashboards",
    group: true,
    icon: <HomeIcon />,
  },
  {
    name: "Layouts",
    group: false,
    icon: <CalendarIcon />,
  },
  {
    name: "Users",
    group: true,
    icon: <UserIcon />,
  },
];
