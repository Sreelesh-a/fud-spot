// import logoHeaderImg from "../../img/fud-spot-log.png";

import { logoHeaderImg } from "../utils/imageConstants";

import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SelectLocationContext } from "../utils/LocationContext";
import SelectLocation from "./SelectLocation";
import { useDispatch } from "react-redux";
import { handleShowSigup } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { ShowSignUpContext } from "../app";
import { updateCartCount } from "../utils/userSlice";

// import boxicons from "boxicons";
import {
  Offer,
  AboutUsIcon,
  HelpIcon,
  ProfileIcon,
  CartIcon,
} from "../utils/icons/Arrow";
import MobMenu from "./MobMenu";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";

const Header = () => {
  const { setSelectArea, location } = useContext(SelectLocationContext);
  const [showSigups, setShowSignups] = useState(false);
  const [loginAuth, setLoginAuth] = useState(false);
  const [displayLocations, setDisplayLocation] = useState(false);
  const { setDisplaySelectLocation } = useContext(SelectLocationContext);

  const { showSigup, setShowSignup } = useContext(ShowSignUpContext);
  // const DisplayLocationComp = () => {
  //   if (displayLocations) {
  //     return <SelectLocation />;
  //   }
  // };
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = useSelector((store) => store.user.cartCount);
  const userData = useSelector((store) => store.user.userData);
  // console.log(cartCount);

  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSignUp = () => {
    setShowSignup(!showSigup);
  };

  const dispatch = useDispatch();
  // dispatch(handleShowSigup(setShowSignup));

  return (
    <div>
      <div className="flex  justify-between py-4  px-10 md:items-center md:px-20  lg:px-28  items-center drop-shadow-[0_0rem_1rem_rgba(0,0,0,0.07)]  w-full fixed top-0 left-0 right-0 z-10 bg-white  ">
        <div className="flex items-center gap-4 ">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <img src={logoHeaderImg} className="w-10 "></img>
          </Link>

          <div className="flex items-center gap-x-2 ">
            <div
              className="font-semibold underline underline-offset-4"
              // onClick={() => {
              //   setDisplaySelectLocation(true);
              // }}
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
        {showSigup && <SignUp />}
        <div className="navItems  hidden sm:block">
          <ul className="flex gap-10 items-center">
            <li className="">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/about-us"
                onClick={handleClickTop}
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
                onClick={handleClickTop}
                className="flex items-center gap-x-2"
              >
                <i class="fa-solid fa-magnifying-glass"></i> Search
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/offers"
                onClick={handleClickTop}
                className="flex items-center gap-x-2"
              >
                <Offer />
                Offers
              </Link>
            </li>
            <li className="flex items-center gap-x-2 md:hidden">
              <HelpIcon />
              Help
            </li>
            <div
              className="flex items-center cursor-pointer gap-x-2"
              onClick={handleSignUp}
            >
              <ProfileIcon />
              <div className="truncate max-w-24 text-start">
                {userData?.name ? userData?.name : "Sign in"}
              </div>
            </div>
            <Link to="/cart">
              <li
                className="flex items-center gap-x-2"
                onClick={handleClickTop}
              >
                {cartItems.length != 0 ? (
                  <div className="scale-150 items-center text-green-700 mb-1">
                    {cartItems.length != 0 && (
                      // <div
                      //   className={`absolute text-xs text-center   font-bold mt-2 text-green-700 mb-[.23rem] ${
                      //     cartItems.length >= 10
                      //       ? "ml-[.2rem] sm:ml-[.3rem] md:ml-[.3rem]"
                      //       : "sm:ml-[.47rem] md:ml-[.47rem]"
                      //   }`}
                      // >
                      <div
                        className="absolute   font-bold mt-2 bg-white text-green-700"
                        style={{
                          left: "50%",
                          transform: "translateX(-50%)",

                          width: "auto",
                          fontSize: "0.55rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {cartCount}
                      </div>
                    )}
                    <CartIcon />
                  </div>
                ) : (
                  <div className="">
                    <CartIcon />
                  </div>
                )}
                Cart
              </li>
            </Link>
          </ul>
        </div>
        <div className="sm:hidden my-auto" onClick={() => setShowSignup(true)}>
          <i class="fa-solid fa-circle-user text-4xl text-gray-500"></i>
        </div>
      </div>
      <div className="sm:hidden">
        <MobMenu />
      </div>
    </div>
  );
};

export default Header;
