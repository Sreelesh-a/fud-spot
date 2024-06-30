import logoHeaderImg from "/img/fud-spot-log.png";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [loginAuth, setLoginAuth] = useState("Sign in");
  return (
    <div className="header ">
      <div className="logoHeader">
        <img src={logoHeaderImg} className="logoHeaderImg"></img>
        <span className="LocationHeader">
          <span className="main-location">Kochi</span>, Kerala, India
        </span>
      </div>
      <div className="hamburger">
        <i class="fa-solid fa-circle-user "></i>
      </div>
      <div className="navItems hide-on-mob">
        <ul>
          <li>FudSpot Corporate</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li
            className="login-auth"
            onClick={() => {
              loginAuth === "Sign in"
                ? setLoginAuth("Sign out")
                : setLoginAuth("Sign in");
            }}
          >
            {loginAuth}
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
