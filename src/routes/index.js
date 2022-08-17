import { lazy } from "react";
import { RouteEnum } from "../configuration/route-config";

const Home = lazy(() => import("../containers/HomeContainer"));

const routes = [
  {
    path: RouteEnum.home,
    title: "home",
    element: <Home />,
  },
];

export { routes };
