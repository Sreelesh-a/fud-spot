import React from "react";
import { useState, useEffect } from "react";
import { SWIGGY_CAROUSEL_API } from "../utils/constants";
import { useRef } from "react";
import Slider from "react-slick";
import { ArrowBack, ArrowFront } from "../utils/icons/Arrow";
import RestaurantCard, { WithItemLabel } from "./RestaurantCard";
import { SWIGGY_API_LINK3 } from "../utils/constants";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import useSwiggiApi from "../utils/useSwiggiApi";
import TopRestoMobileShimmer from "../utils/TopRestoMobileShimmer";

const TopRestoChainsMobile = () => {
  const [ListOfRest, setListOfRest] = useState([]);

  const [FilteredListOfResto, setFilteredListOfResto] = useState([]);

  const swiggyApidata = useSwiggiApi();
  const restaurantData =
    swiggyApidata?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (restaurantData) {
      setListOfRest(restaurantData || []);
      setFilteredListOfResto(restaurantData || []);
    }
  }, [restaurantData]);
  const RestoCardItemOffer = WithItemLabel(RestaurantCard);

  const ShimmerUi = () => {
    if (ListOfRest.length == 0) {
      return <TopRestoMobileShimmer />;
    }
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="   sm:w-full">
      <div className=" flex justify-between">
        <div className="font-bold lg:text-2xl sm:text-sm">
          Top Restaurant Chains in Kochi
        </div>
        <div className="flex">
          <div className="w-10" onClick={previous}>
            {/* <ArrowBack /> */}
            <i class="fa-solid fa-circle-arrow-left text-3xl text-gray-300"></i>
          </div>
          <div className="w-10 " onClick={next}>
            {/* <ArrowFront /> */}
            <i class="fa-solid fa-circle-arrow-right text-3xl text-gray-300"></i>
          </div>
        </div>
      </div>

      <div className="">
        <ShimmerUi />
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {ListOfRest?.map((rest) => (
            <Link
              onClick={handleClickTop}
              key={rest?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/resto-menu/" + rest?.info?.id}
            >
              {rest?.info?.aggregatedDiscountInfoV3 ? (
                <div className="sm:gap-x-9">
                  <RestoCardItemOffer
                    restData={rest}
                    discountInfo={rest?.info?.aggregatedDiscountInfoV3 || null}
                  />
                </div>
              ) : (
                <div className="gap-x-1">
                  <RestaurantCard restData={rest} discountInfo={null} />
                </div>
              )}
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRestoChainsMobile;
