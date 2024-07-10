import useSwiggyApi from "../utils/useSwiggiApi";
import React from "react";
import { useState, useEffect } from "react";
import { SWIGGY_CAROUSEL_API } from "../utils/constants";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowBack, ArrowFront } from "../utils/icons/Arrow";
import RestaurantCard, { WithItemLabel } from "./RestaurantCard";
import { SWIGGY_API_LINK3 } from "../utils/constants";
import { Link } from "react-router-dom";

const TopRestoChains = () => {
  const [ListOfRest, setListOfRest] = useState([]);
  const swiggyApi = useSwiggyApi();
  let swiggyInfo = swiggyApi?.cards[0]?.card?.card?.imageGridCards?.info;
  const RestoCardItemOffer = WithItemLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
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
    } catch (error) {
      console.error("Error fetching data:", error);
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
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className=" ">
      <div className=" flex justify-between">
        <div className="font-bold lg:text-2xl sm:text-sm">
          Top Restaurant Chains in Kochi
        </div>
        <div className="flex">
          <div className="w-10" onClick={previous}>
            <ArrowBack />
          </div>
          <div className="w-10 " onClick={next}>
            <ArrowFront />
          </div>
        </div>
      </div>

      <div className="">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {ListOfRest?.map((rest) => (
            <div className="">
              <Link
                key={rest.info.id}
                style={{ textDecoration: "none", color: "inherit" }}
                to={"/resto-menu/" + rest?.info?.id}
              >
                {rest?.info?.aggregatedDiscountInfoV3 ? (
                  <div className="gap-x-9">
                    <RestoCardItemOffer
                      restData={rest}
                      discountInfo={
                        rest?.info?.aggregatedDiscountInfoV3 || null
                      }
                    />
                  </div>
                ) : (
                  <div className="gap-x-1">
                    <RestaurantCard restData={rest} discountInfo={null} />
                  </div>
                )}
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRestoChains;
