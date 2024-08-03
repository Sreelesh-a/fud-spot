import useSwiggyApi from "../utils/useSwiggiApi";
import React, { useEffect } from "react";
import { useState } from "react";
import { SWIGGY_CAROUSEL_API } from "../utils/constants";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowBack, ArrowFront } from "../utils/icons/Arrow";
import { ShimmerWhatsOnYourMind } from "./ShimmerCard";
import { Link } from "react-router-dom";
// import WhatsOUMCOllection from "./WhatsOUMCollection";
import useWhatsOnUrMindAPI from "../utils/useWhatOnUrMindAPI";

const WhatsOnYourMind = () => {
  const [swiggyInfo, setSwiggyInfo] = useState([]);
  const [collectionId, setCollectionId] = useState(null);
  let swiggyApi = useSwiggyApi();
  console.log(swiggyApi);

  useEffect(() => {
    if (swiggyApi) {
      setSwiggyInfo(
        (swiggyApi && swiggyApi?.cards[0]?.card?.card?.imageGridCards?.info) ||
          []
      );
    }
  }, [swiggyApi]);
  // console.log(swiggyInfo);

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
  const regex = /collections\/(\d+)\?/i;

  return (
    <div className="">
      <div className="">
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
              <Link
                to={
                  "/collections/" +
                  regex.exec(d?.action?.link)[1] +
                  d?.description
                }
              >
                <img className="w-36" src={SWIGGY_CAROUSEL_API + d?.imageId} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
