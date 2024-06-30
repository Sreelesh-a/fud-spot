import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";
import { useParams } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import MobMenu from "./components/MobMenu";

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <MobMenu />
      <Outlet />
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/resto-menu/:resid",
        element: <RestMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
