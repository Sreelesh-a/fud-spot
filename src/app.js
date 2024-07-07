import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";

import RestMenu from "./components/RestMenu";

import SearchClassComp from "./components/SearchClassComp";
import Header from "./components/Header";
import Body from "./components/Body";
import MobMenu from "./components/MobMenu";
// import AboutUs from "./components/AboutUs";
let AboutUs = require("./components/AboutUs");
import ShimmerCard from "./components/ShimmerCard";

AboutUs = lazy(() => {
  import("./components/AboutUs");
});

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      {/* <MobMenu /> */}
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
      {
        path: "/search",
        element: <SearchClassComp />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
