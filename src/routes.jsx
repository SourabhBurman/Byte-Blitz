import {
  HomeIcon,
  PhoneIcon,
  UserCircleIcon,
  UserGroupIcon,

} from "@heroicons/react/24/solid";
import { Home, Profile,  } from "@/pages/dashboard";
import Quiz from "./pages/dashboard/Quiz";
import Contact from "./pages/dashboard/contact";
import About from "./pages/dashboard/about";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "about",
        path: "/about",
        element: <About />,
      },
      {
        icon: <PhoneIcon {...icon} />,
        name: "contact",
        path: "/contact",
        element: <Contact />,
      }
     

      // ,
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "quiz",
      //   path: "/quiz",
      //   element: <Quiz />,
      // }
    ],
  }
];

export default routes;
