import { InventoryIcon, OrderIcon,AnalyticsIcon, ReportIcon } from "../assets/icons";
// Define a type for each menu item
interface MenuItem {
  id: number; // Unique identifier for the menu item
  title: string; // Title to be displayed
  icon: JSX.Element; // Icon as a React component
}


export const menuItem: MenuItem[] = [
  {
    id: 1,
    title: "Inventories",
    icon: <InventoryIcon />,
  },
  {
    id: 2,
    title: "Orders",
    icon: <OrderIcon />,
  },
  {
    id: 3,
    title: "Analytics",
    icon: <AnalyticsIcon />,
  },
  {
    id: 4,
    title: "Reports",
    icon: <ReportIcon />,
  },
];
