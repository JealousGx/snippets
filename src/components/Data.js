import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    name: "dashboards",
    group: true,
    items: ["analytics", "ecommerce"],
    icon: <HomeIcon />,
  },
  {
    name: "layouts",
    group: true,
    icon: <LayoutIcon />,
  },
  {
    name: "calendar",
    group: false,
    icon: <CalendarIcon />,
  },
  {
    name: "invoice",
    group: true,
    icon: <InvoiceIcon />,
  },
  {
    name: "users",
    group: true,
    icon: <UserIcon />,
  },
  {
    name: "roles & permissions",
    group: true,
    icon: <RolesIcon />,
  },
  {
    name: "pages",
    group: true,
    icon: <PagesIcon />,
  },
  {
    name: "authentication",
    group: true,
    icon: <AuthIcon />,
  },
  {
    name: "wizard examples",
    group: true,
    icon: <WizardIcon />,
  },
  {
    name: "modal examples",
    group: false,
    icon: <ModalIcon />,
  },
];
