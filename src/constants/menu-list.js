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
const MENU = [
  {
    id: uuidv4(),
    element: <FiHome />,
    title: "Home",
    link: "#",
  },
  {
    id: uuidv4(),
    element: <FiCompass />,
    title: "Explore",
    link: "#",
  },
  {
    id: uuidv4(),
    element: <FiSearch />,
    title: "Search",
    link: "#",
  },
];

const PERSONAL = [
  {
    id: uuidv4(),
    element: <FiBookmark />,
    title: "Bookmarked",
    link: "#",
  },
  {
    id: uuidv4(),
    element: <FiClock />,
    title: "History",
    link: "#",
  },
];

const GENERAL = [
  {
    id: uuidv4(),
    element: <FiUser />,
    title: "Profile",
    link: "#",
  },
  {
    id: uuidv4(),
    element: <FiLogIn />,
    title: "Login",
    link: "#",
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
