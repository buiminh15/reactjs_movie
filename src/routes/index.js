import { lazy } from 'react';
import { RouteEnum } from '../configuration/route-config';
import { v4 as uuidv4 } from 'uuid';
import { FiHome, FiSearch, FiCompass, FiBookmark, FiClock, FiLogIn, FiUser } from 'react-icons/fi';

const Home = lazy(() => import('../containers/HomeContainer'));
const Search = lazy(() => import('../containers/SearchContainer'));
const Auth = lazy(() => import('../containers/AuthContainer'));

const MENU = [
  {
    id: uuidv4(),
    path: RouteEnum.home,
    title: 'home',
    icon: <FiHome />,
    element: <Home />
  },
  {
    id: uuidv4(),
    path: RouteEnum.explore,
    title: 'explore',
    icon: <FiCompass />,
    element: <Home />
  },
  {
    id: uuidv4(),
    path: RouteEnum.search,
    title: 'search',
    icon: <FiSearch />,
    element: <Search />
  }
];

const PERSONAL = [
  {
    id: uuidv4(),
    path: RouteEnum.bookmarked,
    title: 'bookmarked',
    icon: <FiBookmark />,
    element: <Home />,
    auth: true
  },
  {
    id: uuidv4(),
    path: RouteEnum.history,
    title: 'history',
    icon: <FiClock />,
    element: <Home />,
    auth: true
  }
];

const GENERAL = [
  {
    id: uuidv4(),
    path: RouteEnum.profile,
    title: 'profile',
    icon: <FiUser />,
    element: <Home />,
    auth: true
  },
  {
    id: uuidv4(),
    path: RouteEnum.login,
    title: 'login',
    icon: <FiLogIn />,
    element: <Auth />
  }
];

const SIDE_MENU = [
  {
    id: uuidv4(),
    title: 'menu',
    data: MENU
  },
  {
    id: uuidv4(),
    title: 'personal',
    data: PERSONAL
  },
  {
    id: uuidv4(),
    title: 'general',
    data: GENERAL
  }
];

const routes = SIDE_MENU.map((item) => item.data).flat();

export { routes, SIDE_MENU };
