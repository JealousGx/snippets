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
    items: [
      { id: 1, name: "analytics" },
      { id: 2, name: "ecommerce" },
    ],
    icon: <HomeIcon />,
  },
  {
    name: "layouts",
    group: true,
    items: [
      { id: 3, name: "collapsed menu" },
      { id: 4, name: "content navbar" },
    ],
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
    items: [
      { id: 5, name: "list" },
      { id: 6, name: "preview" },
    ],
    icon: <InvoiceIcon />,
  },
  {
    name: "users",
    group: true,
    items: [
      { id: 7, name: "list" },
      { id: 8, name: "view" },
    ],
    icon: <UserIcon />,
  },
  {
    name: "roles & permissions",
    group: true,
    items: [
      { id: 9, name: "roles" },
      { id: 10, name: "permission" },
    ],
    icon: <RolesIcon />,
  },
  {
    name: "pages",
    group: true,
    items: [
      { id: 11, name: "user profile" },
      { id: 12, name: "account settings" },
    ],
    icon: <PagesIcon />,
  },
  {
    name: "authentication",
    group: true,
    items: [
      { id: 13, name: "login" },
      { id: 14, name: "register" },
    ],
    icon: <AuthIcon />,
  },
  {
    name: "wizard examples",
    group: true,
    items: [
      { id: 15, name: "checkout" },
      { id: 16, name: "create deal" },
    ],
    icon: <WizardIcon />,
  },
  {
    name: "modal examples",
    group: false,
    icon: <ModalIcon />,
  },
];
