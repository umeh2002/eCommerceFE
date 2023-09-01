import { createBrowserRouter } from "react-router-dom";
import Layout from "../Common/Layout";
import Landing from "../Pages/Landing";
import SignIn from "../Auth/SignIn";
import Register from "../Auth/Register";
import DashBoardLayout from "../Dashboard/DashBoardLayout";
import MainPages from "../Dashboard/MainPages";
import CheckOut from "../Dashboard/CheckOut";
import Payment from "../Dashboard/Payment";
import Detailed from "../Dashboard/Detailed";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/dashboard/",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <MainPages />,
      },
      {
        path: "checkout",
        index: true,
        element: <CheckOut />,
      },
      {
        path: "payment",
        index: true,
        element: <Payment />,
      },
    ],
  },
]);
