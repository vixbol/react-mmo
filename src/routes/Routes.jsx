import About from "../pages/About/About";
import BuyCoin from "../pages/BuyCoin/BuyCoin";
import Contacts from "../pages/Contacts/Contacts";
import Download from "../pages/Download/Download";
import Home from "../pages/Home/Home";
import Tutorial from "../pages/Tutorial/Tutorial";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "About",
    component: About,
  },
  {
    path: "Tutorial",
    component: Tutorial,
  },
  {
    path: "Download",
    component: Download,
  },
  {
    path: "BuyCoin",
    component: BuyCoin,
  },
  {
    path: "Contacts",
    component: Contacts,
  },
];
