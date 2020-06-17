
import Index from "views/Index.js";
import Profile from "views/profile/Profile.js";
import Guidelines from "views/guidelines/index";
import Materials from "views/materials/index.js";
import Messages from "views/messages/index.js";
import Reservations from "views/reservations/index.js"

export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const LANDING = '/';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
export const PASSWORD_FORGET = '/pw-forget';
const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/guidelines",
    name: "Guidelines",
    icon: "ni ni-planet text-blue",
    component: Guidelines,
    layout: "/admin"
  },
  {
    path: "/reservations",
    name: "Reservations",
    icon: "ni ni-pin-3 text-orange",
    component: Reservations,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "My Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "ni ni-bullet-list-67 text-red",
    component: Messages,
    layout: "/admin"
  },
  {
    path: "/materials",
    name: "Materials",
    icon: "ni ni-collection text-info",
    component:Materials ,
    layout: "/admin"
  }
];
export default routes;
