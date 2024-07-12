import useSwiggyApi from "../utils/useSwiggiApi";
import React from "react";
import { useState } from "react";
import { SWIGGY_CAROUSEL_API } from "../utils/constants";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowBack, ArrowFront } from "../utils/icons/Arrow";
import { ShimmerWhatsOnYourMind } from "./ShimmerCard";

const WhatsOnYourMind = () => {
  const swiggyApi = useSwiggyApi();
  swiggyInfo = swiggyApi?.cards[0]?.card?.card?.imageGridCards?.info || [];
  // console.log(swiggyInfo.length);

  // const [swiggyInfo, setSwiggyInfo] = useState([]);

  // setSwiggyInfo(swiggyApi?.cards[0]?.card?.card?.imageGridCards?.info || []);

  const ShimmerUi = () => {
    if (swiggyInfo.length == 0) {
      return <ShimmerWhatsOnYourMind />;
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
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className="">
      <div className=" ">
        <div className=" flex justify-between">
          <div className="font-bold lg:text-2xl sm:text-sm">
            What's on your mind?
          </div>
          <div className="flex ">
            <div className="w-10" onClick={previous}>
              <ArrowBack />
            </div>
            <div className="w-10 " onClick={next}>
              <ArrowFront />
            </div>
          </div>
        </div>
        <ShimmerUi />
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {swiggyInfo?.map((d) => (
            <div key={d?.id} className="">
              <img className="" src={SWIGGY_CAROUSEL_API + d?.imageId} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
