const restDatas = require("../utils/mockData");
// import { restDatas } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_LINK } from "../utils/constants";
import React from "react";
import ShimmerCard from "./ShimmerCard";
import MobCarousel from "./MobCarousel";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import WhatsOnYourMind from "./WhatsOnYourMind";

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
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_LINK);
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

  if (onlineStatus === false)
    return alert(
      "You are currently offline. Please check your internet connection."
    );

  return (
    <div className="px-10 lg:px-52   mt-9">
      {/* <MobCarousel /> */}
      <div className="my-9">
        {/* <div className="font-bold lg:text-2xl sm:text-sm">
          What's on your mind?
        </div> */}

        <WhatsOnYourMind />
      </div>
      <hr className="" />

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

        <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-x-24 gap-x-5">
          {/* <RestaurantCard restData={restDatas[0]} /> */}
          {FilteredListOfRest.map((rest) => (
            // <link key={rest.info.id} to={"/resto-menu/" + rest.info.id}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/resto-menu/" + rest?.info?.id}
            >
              <RestaurantCard restData={rest} />
            </Link>
            // </link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
