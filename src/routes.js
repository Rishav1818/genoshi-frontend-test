import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";


// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdPriceCheck,
} from "react-icons/md";
import Pricing from "views/admin/pricing";

const routes = [
  {
    name: "Profile",
    layout: "/admin",
    path: "default",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "My Graphs",
    layout: "/admin",
    path: "graphs",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "My Papers",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "papers",
    component: <DataTables />,
  },
  {
    name: "Pricing",
    layout: "/admin",
    icon: <MdPriceCheck className="h-6 w-6" />,
    path: "pricing",
    component: <Pricing />,
  },

];
export default routes;
