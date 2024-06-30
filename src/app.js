import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

// import restData from "./restuarant";

import Header from "./components/Header";
import Body from "./components/Body";
import MobMenu from "./components/MobMenu";

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <MobMenu />
      <Body />
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
