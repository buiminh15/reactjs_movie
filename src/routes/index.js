import { lazy } from "react";
import { RouteEnum } from "../configuration/route-config";

const Home = lazy(() => import("../containers/HomeContainer"));

const routes = [
  {
    path: RouteEnum.home,
    title: "home",
    element: <Home />,
  },
  {
    path: RouteEnum.explore,
    title: "explore",
    element: <Home />,
  },
  {
    path: RouteEnum.search,
    title: "search",
    element: <Home />,
  },
];

export { routes };
