import { Link } from "react-router-dom";
import logoHeaderImg from "/img/fud-spot-log-b.png";
import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../utils/icons/Arrow";
const MobMenu = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="fixed font-normal bottom-0 left-0 px-4  bg-white flex h-auto py-3  z-10 w-full  border-[.1rem] ">
      <div className="flex justify-center mx-auto px-4   items-center gap-12 ">
        <Link to={"/"}>
          <div className="flex flex-wrap justify-center items-center space-y-1">
            <img
              alt="logo"
              className="nav-logo w-4 justify-center"
              src={logoHeaderImg}
            ></img>
            <div className="font-semibold text-[.7rem]">FUDSPOT</div>
          </div>
        </Link>

        <div className="">
          <Link to={"/"}>
            <div className="flex flex-wrap justify-center items-center ">
              <span className="text-xl justify-center  ">
                <ion-icon className="" name="fast-food-outline"></ion-icon>
              </span>

              <div className="font-semibold text-[.7rem] ">FOOD</div>
            </div>
          </Link>
        </div>
        <div className="">
          {/* <Link to="/cart">
            <span className="text-xl mx-auto ml-1 ">
              <ion-icon name="scale-outline"></ion-icon>
            </span>

            <div className="font-semibold text-[.7rem] ">CART</div>
          </Link> */}

          <Link to="/cart">
            <div className="flex flex-wrap ">
              {cartItems.length != 0 ? (
                <div className="scale-150 items-center text-green-700 mb-1">
                  <CartIcon />
                </div>
              ) : (
                <div className="">
                  <CartIcon />
                </div>
              )}
              <span className="w-full">Cart</span>
              {cartItems.length != 0 && (
                <div className="absolute ml-[.47rem]  text-xs font-bold mt-2 text-green-700 mb-[.23rem] ">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
        </div>

        <div className="">
          <Link to={"/search"}>
            <div className="flex flex-wrap justify-center items-center ">
              <span className="text-xl justify-center  ">
                <ion-icon name="search-outline"></ion-icon>
              </span>

              <div className="font-semibold text-[.7rem] ">SEARCH</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
