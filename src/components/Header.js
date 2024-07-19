import logoHeaderImg from "/img/fud-spot-log.png";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SelectLocationContext } from "../utils/LocationContext";
import SelectLocation from "./SelectLocation";
// import boxicons from "boxicons";
import {
  Offer,
  AboutUsIcon,
  HelpIcon,
  ProfileIcon,
  CartIcon,
} from "../utils/icons/Arrow";

const Header = () => {
  const { setSelectArea, location } = useContext(SelectLocationContext);
  const [loginAuth, setLoginAuth] = useState("Sign in");
  const [displayLocations, setDisplayLocation] = useState(false);
  const { setDisplaySelectLocation } = useContext(SelectLocationContext);
  // const DisplayLocationComp = () => {
  //   if (displayLocations) {
  //     return <SelectLocation />;
  //   }
  // };

  return (
    <div className="flex  justify-between py-4  px-28 m-5 items-center shadow-sm  ">
      <div className="flex items-center gap-4">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <img src={logoHeaderImg} className="w-10 "></img>
        </Link>

        <div className="flex items-center gap-x-2 cursor-pointer">
          <div
            className="font-semibold underline underline-offset-4"
            onClick={() => {
              setDisplaySelectLocation(true);
            }}
          >
            {location}
          </div>
          <span className="text-gray-400 text-sm">Kerala, India...</span>

          <i class="fa-solid fa-chevron-down text-orange-500"></i>
        </div>
      </div>
      {/* <div className=" ">
        <i class="fa-solid fa-circle-user "></i>
      </div> */}
      <div className="navItems hide-on-mob hidden sm:block">
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/about-us"
              className="flex items-center gap-x-2"
            >
              <AboutUsIcon />
              FudSpot Corporate
            </Link>
          </li>
          <li>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/search"
              className="flex items-center gap-x-2"
            >
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/offers"
              className="flex items-center gap-x-2"
            >
              <Offer />
              Offers
            </Link>
          </li>
          <li className="flex items-center gap-x-2">
            <HelpIcon />
            Help
          </li>
          <li
            className="flex items-center gap-x-2"
            onClick={() => {
              loginAuth === "Sign in"
                ? setLoginAuth("Sign out")
                : setLoginAuth("Sign in");
            }}
          >
            <ProfileIcon />
            {loginAuth}
          </li>
          <li className="flex items-center gap-x-2">
            <CartIcon />
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
