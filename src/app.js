import React from "react";
import ReactDOM from "react-dom/client";

// import restData from "./restuarant";

import Header from "./components/Header";
import Body from "./components/Body";
import MobMenu from "./components/MobMenu";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <MobMenu />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
