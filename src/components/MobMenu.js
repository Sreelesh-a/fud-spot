import { Link } from "react-router-dom";
import logoHeaderImg from "/img/fud-spot-log-b.png";
import React from "react";
const MobMenu = () => {
  return (
    <div className="fixed font-normal bottom-0 left-0  bg-white flex h-16  z-10 w-full  border-[.1rem] ">
      <div className="flex justify-center mx-auto px-4   items-center gap-12 ">
        <Link to={"/"}>
          <div className="space-y-1">
            <img
              alt="logo"
              className="nav-logo w-4 mx-auto"
              src={logoHeaderImg}
            ></img>
            <div className="font-semibold text-[.7rem]">FUDSPOT</div>
          </div>
        </Link>

        <div className="">
          <Link to={"/cart"}>
            <span className="text-xl mx-auto ml-1 ">
              <ion-icon className="" name="fast-food-outline"></ion-icon>
            </span>

            <div className="font-semibold text-[.7rem] ">FOOD</div>
          </Link>
        </div>
        <div className="">
          <span className="text-xl mx-auto ml-1 ">
            <ion-icon name="scale-outline"></ion-icon>
          </span>

          <div className="font-semibold text-[.7rem] ">GENIE</div>
        </div>

        <div className="">
          <Link to={"/search"}>
            <span className="text-xl mx-auto ml-1 ">
              <ion-icon name="search-outline"></ion-icon>
            </span>

            <div className="font-semibold text-[.7rem] ">SEARCH</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
