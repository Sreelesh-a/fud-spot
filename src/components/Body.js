const restDatas = require("../utils/mockData");
// import { restDatas } from "../utils/mockData";
import RestaurantCard, { WithItemLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_LINK3 } from "../utils/constants";
import React from "react";
import ShimmerCard from "./ShimmerCard";
import MobCarousel from "./MobCarousel";
import { Link } from "react-router-dom";
import TopRestoChains from "./TopRestoChains";
import useOnlineStatus from "../utils/useOnlineStatus";
import WhatsOnYourMind from "./WhatsOnYourMind";
import useSwiggiApi from "../utils/useSwiggiApi";
import RestoWithOnlineFoodDelivery from "./RestoWithOnlineFoodDelivery";
import { list } from "postcss";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const [ListOfRest, setListOfRest] = useState([]);
  const [FilteredListOfResto, setFilteredListOfResto] = useState([]);

  const swiggyApidata = useSwiggiApi();
  const restaurantData =
    swiggyApidata?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  useEffect(() => {
    if (restaurantData) {
      setListOfRest(restaurantData || []);
      setFilteredListOfResto(restaurantData || []);
    }
  }, [restaurantData]);

  const ShimmerUi = () => {
    if (FilteredListOfResto.length === 0) {
      return <ShimmerCard />;
    }
  };
  const [searchText, setSearchText] = useState("");
  // console.log(FilteredListOfRest[0]?.info?.id);

  const topRatedResto = () => {
    let filterList = ListOfRest.filter((res) => res?.info?.avgRating >= 4.2);
    setFilteredListOfResto(filterList);
  };
  const mgRoadFilter = () => {
    let filterList = ListOfRest.filter(
      (res) => res?.info?.areaName >= "M G Road"
    );
    setFilteredListOfResto(filterList);
  };

  const onlineStatus = useOnlineStatus();
  const RestoCardItemOffer = WithItemLabel(RestaurantCard);

  if (onlineStatus === false) {
    toast("Lost connection. Retry.", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <div className="px-10 lg:px-52  mt-9">
      {/* <MobCarousel /> */}
      <div className="my-9">
        {/* <div className="font-bold lg:text-2xl sm:text-sm">
          What's on your mind?
        </div> */}

        <WhatsOnYourMind />
      </div>
      <hr className="" />
      <div className="my-9 ">
        <TopRestoChains />
      </div>
      <hr className="" />

      <div className="my-9">{/* <RestoWithOnlineFoodDelivery /> */}</div>

      <div className="my-9">
        <div className="flex items-center flex-wrap justify-between gap-y-4">
          <div className="font-bold lg:text-2xl sm:text-lg">
            Top Restaurant Chains in Kochi
          </div>
          <div className="flex gap-x-6">
            {/* <div className="flex gap-x-2">
              <input
                type="text"
                className="border border-gray-300 "
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
              <button
                className="bg-orange-600 px-3 text-white rounded-md"
                onClick={() => {
                  const filterRest = ListOfRest.filter((res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredListOfRest(filterRest);
                }}
              >
                Search
              </button>
            </div> */}
            <div className="button-filter flex gap-x-3  text-gray-500">
              <button
                className=" border border-gray-400 px-4 rounded-xl"
                onClick={topRatedResto}
              >
                Rating 4.2+
              </button>
              <button
                className="border border-gray-400 px-4 rounded-xl"
                onClick={mgRoadFilter}
              >
                Near M G Road
              </button>
              <button
                className="border border-gray-400 px-4 rounded-xl"
                onClick={""}
              >
                Pure Veg
              </button>
              <button
                className="border border-gray-400 px-4 rounded-xl"
                onClick={""}
              >
                Fast Delivery
              </button>
              <button
                className="border border-gray-400 px-4 rounded-xl"
                onClick={""}
              >
                Offers
              </button>
              <button
                className="border border-gray-400 px-4 rounded-xl"
                onClick={""}
              >
                ₹300-600
              </button>
              <button
                className="border border-gray-400 px-4 rounded-xl"
                onClick={""}
              >
                Less than ₹300
              </button>
            </div>
          </div>
        </div>

        <div className="rest-container">
          <ShimmerUi />
        </div>
        <div className="">
          <div className="  justify-between  grid grid-cols-1 sm:grid-cols-4  gap-x-4 cursor-pointer ">
            {FilteredListOfResto &&
              FilteredListOfResto?.map((rest) => (
                <Link
                  key={rest.info.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={"/resto-menu/" + rest?.info?.id}
                >
                  {rest?.info?.aggregatedDiscountInfoV3 ? (
                    <RestoCardItemOffer
                      restData={rest}
                      discountInfo={
                        rest?.info?.aggregatedDiscountInfoV3 || null
                      }
                    />
                  ) : (
                    <RestaurantCard
                      restData={rest}
                      discountInfo={null}
                      discountCheck={false}
                    />
                  )}
                </Link>
                // </link>
              ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Body;
