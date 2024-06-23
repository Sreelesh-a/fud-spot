import React from "react";
import ReactDOM from "react-dom/client";
import logoHeaderImg from "./img/fud-spot-log.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoHeader">
        <img src={logoHeaderImg} className="logoHeader"></img>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
