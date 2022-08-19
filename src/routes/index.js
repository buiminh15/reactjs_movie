import { lazy } from "react";
import { RouteEnum } from "../configuration/route-config";
import { v4 as uuidv4 } from "uuid";

const Home = lazy(() => import("../containers/HomeContainer"));

const routes = [
  {
    id: uuidv4(),
    path: RouteEnum.home,
    title: "home",
    element: <Home />,
  },
  {
    id: uuidv4(),
    path: RouteEnum.explore,
    title: "explore",
    element: <Home />,
  },
  {
    id: uuidv4(),
    path: RouteEnum.search,
    title: "search",
    element: <Home />,
  },
];

export { routes };
