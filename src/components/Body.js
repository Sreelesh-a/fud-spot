const restDatas = require("../utils/mockData");
// import { restDatas } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import MobCarousel from "./MobCarousel";

const Body = () => {
  const [ListOfRest, setListOfRest] = useState(restDatas);
  const topRatedResto = () => {
    let filterList = ListOfRest.filter((res) => res.info.avgRating >= 4.5);
    setListOfRest(filterList);
  };

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
          <span className="top-rest-title">Top restaurant chains in Kochi</span>
          <button className="top-rated-resto-btn" onClick={topRatedResto}>
            Top Rated
          </button>
        </div>

        <div className="rest-container">
          {/* <RestaurantCard restData={restDatas[0]} /> */}
          {ListOfRest.map((rest) => (
            <RestaurantCard key={rest.info.id} restData={rest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
