import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";

import RestMenu from "./components/RestMenu";

import SearchClassComp from "./components/SearchClassComp";
import Search from "./components/Search";
import Header from "./components/Header";
import Body from "./components/Body";
import MobMenu from "./components/MobMenu";
// import AboutUs from "./components/AboutUs";
let AboutUs = require("./components/AboutUs");
import ShimmerCard from "./components/ShimmerCard";
import { useState } from "react";
import { SelectLocationContext } from "./utils/LocationContext";
import SelectLocation from "./components/SelectLocation";

AboutUs = lazy(() => {
  import("./components/AboutUs");
});

export const AppLayout = () => {
  const [selectArea, setSelectArea] = useState("Kochi");
  const [displaySelectLocation, setDisplaySelectLocation] = useState(false);

  return (
    <>
      <SelectLocationContext.Provider
        value={{ location: selectArea, setDisplaySelectLocation }}
      >
        <div className="AppLayout relative">
          <div className="">
            {displaySelectLocation == true && (
              <SelectLocation
                displaySelectLocation={displaySelectLocation}
                setDisplaySelectLocation={setDisplaySelectLocation}
                setSelectArea={setSelectArea}
              />
            )}
          </div>

          <Header />
          {/* <MobMenu /> */}
          <Outlet />
        </div>
      </SelectLocationContext.Provider>
    </>
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
        element: <Search />,
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
