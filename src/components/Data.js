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
    items: ["collapsed menu", "content navbar"],
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
    items: ["list", "preview"],
    icon: <InvoiceIcon />,
  },
  {
    name: "users",
    group: true,
    items: ["list", "view"],
    icon: <UserIcon />,
  },
  {
    name: "roles & permissions",
    group: true,
    items: ["roles", "permission"],
    icon: <RolesIcon />,
  },
  {
    name: "pages",
    group: true,
    items: ["user profile", "account settings"],
    icon: <PagesIcon />,
  },
  {
    name: "authentication",
    group: true,
    items: ["login", "register"],
    icon: <AuthIcon />,
  },
  {
    name: "wizard examples",
    group: true,
    items: ["checkout", "create deal"],
    icon: <WizardIcon />,
  },
  {
    name: "modal examples",
    group: false,
    icon: <ModalIcon />,
  },
];
