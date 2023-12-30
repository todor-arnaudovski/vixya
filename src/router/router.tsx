import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Init, ErrorPage, RegisterPage, SetupPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Init />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "setup",
        element: <SetupPage />,
      },
    ],
  },
]);
