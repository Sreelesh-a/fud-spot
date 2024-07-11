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

const Body = () => {
  const [ListOfRest, setListOfRest] = useState([]);
  const [FilteredListOfRest, setFilteredListOfRest] = useState([]);
  const topRatedResto = () => {
    let filterList = ListOfRest.filter((res) => res?.info?.avgRating >= 4.5);
    setListOfRest(filterList);
  };
  const mgRoadFilter = () => {
    let filterList = ListOfRest.filter(
      (res) => res?.info?.areaName >= "M G Road"
    );
    setListOfRest(filterList);
  };

  useEffect(() => {
    fetchData();
    // fetchSwigy();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_LINK3);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const swiggyJson = await response.json();

      setListOfRest(
        swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredListOfRest(
        swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ShimmerUi = () => {
    if (ListOfRest.length === 0) {
      return <ShimmerCard />;
    }
  };
  const [searchText, setSearchText] = useState("");
  // console.log(FilteredListOfRest[0]?.info?.id);

  const onlineStatus = useOnlineStatus();
  const RestoCardItemOffer = WithItemLabel(RestaurantCard);

  if (onlineStatus === false)
    return (
      <div>
        You are currently offline. Please check your internet connection
      </div>
    );
  // const discountInfo = FilteredListOfRest[1]?.info?.aggregatedDiscountInfoV3;
  // console.log(discountInfo);

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
        <div className="flex items-center flex-wrap justify-between">
          <div className="font-bold lg:text-2xl sm:text-lg">
            Top Restaurant Chains in Kochi
          </div>
          <div className="flex gap-6">
            <div className="search-filter">
              <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
              <button
                className="search-btn"
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
            </div>
            <div className="button-filter">
              <button className="top-rated-resto-btn" onClick={topRatedResto}>
                Top Rated
              </button>
              <button className="mgroad-resto-btn" onClick={mgRoadFilter}>
                Near M G Road
              </button>
            </div>
          </div>
        </div>

        <div className="rest-container">
          <ShimmerUi />
        </div>
        <div className="h-full overflow-auto">
          <div className="  justify-between  grid grid-cols-1 sm:grid-cols-4  ">
            {FilteredListOfRest &&
              FilteredListOfRest?.map((rest) => (
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
                    <RestaurantCard restData={rest} discountInfo={null} />
                  )}
                </Link>
                // </link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
