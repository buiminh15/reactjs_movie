import {
  FiHome,
  FiSearch,
  FiCompass,
  FiBookmark,
  FiClock,
  FiLogIn,
  FiUser,
} from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { RouteEnum } from "../configuration/route-config";
const MENU = [
  {
    id: uuidv4(),
    element: <FiHome />,
    path: RouteEnum.home,
    title: "Home",
  },
  {
    id: uuidv4(),
    element: <FiCompass />,
    path: RouteEnum.explore,
    title: "Explore",
  },
  {
    id: uuidv4(),
    element: <FiSearch />,
    path: RouteEnum.search,
    title: "Search",
  },
];

const PERSONAL = [
  {
    id: uuidv4(),
    element: <FiBookmark />,
    path: RouteEnum.search,
    title: "Bookmarked",
  },
  {
    id: uuidv4(),
    element: <FiClock />,
    path: RouteEnum.search,
    title: "History",
  },
];

const GENERAL = [
  {
    id: uuidv4(),
    element: <FiUser />,
    path: RouteEnum.search,
    title: "Profile",
  },
  {
    id: uuidv4(),
    element: <FiLogIn />,
    path: RouteEnum.search,
    title: "Login",
  },
];

const SIDE_MENU = [
  {
    id: uuidv4(),
    title: "menu",
    data: MENU,
  },
  {
    id: uuidv4(),
    title: "personal",
    data: PERSONAL,
  },
  {
    id: uuidv4(),
    title: "general",
    data: GENERAL,
  },
];

export { SIDE_MENU };
