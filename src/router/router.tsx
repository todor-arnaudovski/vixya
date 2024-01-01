import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Init, ErrorPage, RegisterPage, SetupPage, HomePage } from "../pages";

const baseUrl = import.meta.env.BASE_URL;

export const router = createBrowserRouter([
  {
    path: `${baseUrl}`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${baseUrl}`,
        element: <Init />,
      },
      {
        path: `${baseUrl}register`,
        element: <RegisterPage />,
      },
      {
        path: `${baseUrl}setup`,
        element: <SetupPage />,
      },
      {
        path: `${baseUrl}home`,
        element: <HomePage />,
      },
    ],
  },
]);
