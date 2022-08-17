import { RouteEnum } from "configuration/route-config";
import { lazy } from "react";

const Home = lazy(() => import("@/containers/HomeContainer"));

const routes = [
  {
    path: RouteEnum.home,
    title: "home",
    element: <Home />,
  },
];

export { routes };
