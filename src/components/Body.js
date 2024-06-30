const restDatas = require("../utils/mockData");
// import { restDatas } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_LINK } from "../utils/constants";
import React from "react";
import ShimmerCard from "./ShimmerCard";
import MobCarousel from "./MobCarousel";
import { Link } from "react-router-dom";

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
      console.log(swiggyJson?.data?.cards[2]);
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
  console.log(FilteredListOfRest[0]?.info?.id);

  return (
    <div className="body">
      <MobCarousel />
      <div className="carouselHome">
        <div className="sectionTitle-carousel">What's on your mind?</div>
        <div className="carouselItems">
          <ul>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/e20c602ba8ed5d8ec2204e7a7b19d9f6"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
              ></img>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line-divider" />

      <div className="restaurantMain">
        <div className="sectionTitle top-rated-resto">
          <span className="top-rest-title">Top Restaurant Chains in Kochi</span>
          <div className="filter-resto">
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
                  //filter
                  // const filterRest = ListOfRest.filter((res) =>
                  //   res?.info?.name
                  //     .toLowerCase()
                  //     .includes(searchText.toLowerCase())
                  // );
                  const filterRest = ListOfRest.filter((res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredListOfRest(filterRest);
                  console.log(ListOfRest);
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

        <div className="rest-container">
          {/* <RestaurantCard restData={restDatas[0]} /> */}
          {FilteredListOfRest.map((rest) => (
            // <link key={rest.info.id} to={"/resto-menu/" + rest.info.id}>
            <Link to={"/resto-menu/" + rest?.info?.id}>
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
