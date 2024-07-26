import useSwiggyApi from "../utils/useSwiggiApi";
import { useState } from "react";
import { RESTO_IMG_LINK } from "../utils/constants";

const SearchResult = (props) => {
  console.log(props);
  const { name, areaName, cloudinaryImageId } = props?.data;

  return (
    <div className="">
      <div className="flex items-center gap-6">
        <div className="relative overflow-hidden bg-gray-300 w-32 h-24 rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={RESTO_IMG_LINK + cloudinaryImageId}
          />
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-gray-500">{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
