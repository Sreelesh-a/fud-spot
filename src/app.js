import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";
import AppDownloadBanner from "./components/AppDownloadBanner";
import { SwiggyProvider } from "./utils/swiggyContext.js";
import RestMenu from "./components/RestMenu";
import { PersistGate } from "redux-persist/integration/react";
// import appStore, { persistor } from "./path/to/your/store";
import appStore, { persistor } from "./utils/appStore.js";

import SearchClassComp from "./components/SearchClassComp";
import Search from "./components/Search";
import Header from "./components/Header";
import Body from "./components/Body";
import MobMenu from "./components/MobMenu";
// import AboutUs from "./components/AboutUs";
// let AboutUs = require("./components/AboutUs");
import ShimmerCard from "./components/ShimmerCard";
import { useState } from "react";
import { SelectLocationContext } from "./utils/LocationContext";
import SelectLocation from "./components/SelectLocation";
import Footer from "./components/Footer";
import WhatsOUMCOllection from "./components/WhatsOUMCOllection.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import path from "path-browserify";
import CartPage from "./components/CartPage.js";
import AboutUs from "./components/AboutUs";

// AboutUs = lazy(() => {
//   import("./components/AboutUs");
// });

export const AppLayout = () => {
  const [selectArea, setSelectArea] = useState("Kochi");
  const [displaySelectLocation, setDisplaySelectLocation] = useState(false);

  return (
    <>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <SelectLocationContext.Provider
            value={{ location: selectArea, setDisplaySelectLocation }}
          >
            <SwiggyProvider>
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
            </SwiggyProvider>
          </SelectLocationContext.Provider>
        </PersistGate>
      </Provider>
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
        element: (
          <>
            <Body />
            <AppDownloadBanner />
            <Footer />
          </>
        ),
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
        path: "/collections/:collectionId",
        element: <WhatsOUMCOllection />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/about-us",
    element: (
      // <Suspense fallback={<ShimmerCard />}>
      <AboutUs />
      // </Suspense>
    ),
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
