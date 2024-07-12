import { title } from "process";
import useSwiggyApi from "../utils/useSwiggiApi";
import React, { useState, useEffect } from "react";
import { RESTO_IMG_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const RestoWithOnlineFoodDelivery = () => {
  const [ListOfRest, setListOfRest] = useState([]);
  const [title, setTitle] = useState("Loading");
  const swiggyApi = useSwiggyApi();

  useEffect(() => {
    setListOfRest(
      swiggyApi?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setTitle(swiggyApi?.cards[2]?.card?.card?.title);
  }, []);

  //   console.log(ListOfRest[0].info);

  return (
    <div className="">
      <div className="">
        <div className="font-bold lg:text-2xl sm:text-lg">{title} </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-4 ">
        {ListOfRest &&
          ListOfRest.map((res) => (
            <Link key="res?.info?.id">
              <RestoCards info={res?.info} />
            </Link>
          ))}
      </div>
    </div>
  );
};

const RestoCards = (props) => {
  const { info } = props;
  const { name, cloudinaryImageId, avgRating, sla, areaName } = info;
  return (
    <div className="">
      <div className="">
        <div className="w-64 h-48">
          <img
            src={RESTO_IMG_LINK + cloudinaryImageId}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RestoWithOnlineFoodDelivery;
