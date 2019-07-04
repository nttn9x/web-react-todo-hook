import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Todo = lazy(() =>
  import("../../pages/public/todo/container/todo.container")
);

const routes: RouteProps[] = [
  {
    path: "/",
    component: Todo
  }
];

export default routes;
