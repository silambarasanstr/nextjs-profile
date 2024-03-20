import { MdSpaceDashboard } from "react-icons/md";

import { SideNavItem } from "./types";


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <MdSpaceDashboard width="24" height="24" />,
  },
  {
    title: "About",
    path: "/spinner",
    icon: <MdSpaceDashboard width="24" height="24" />,
  },
  {
    title: "Projects",
    path: "/trips/allotments",
    icon: <MdSpaceDashboard width="24" height="24" />,
  },
  {
    title: "Resume",
    path: "/create-vehicles",
    icon: <MdSpaceDashboard width="24" height="24" />,
  },

  {
    title: "Contact",
    path: "/create-vehicles",
    icon: <MdSpaceDashboard width="24" height="24" />,
  },
  
  {
    title: "Roles",
    path: "/roles-and-permissions",
    icon: <MdSpaceDashboard width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/Admin" },
    ],
  },
  
];
