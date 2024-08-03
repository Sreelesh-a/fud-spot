import { useState, useEffect } from "react";
import MenuPageShimmerUI from "./MenuPageShimmerUI";
import useWhatsOnUrMindAPI from "../utils/useWhatOnUrMindAPI";
import ShimmerCard from "./ShimmerCard";

import WhatsOYMindMobile from "./WhatsOYMindMobile";

const Offers = () => {
  const whatsOnUrMindData = useWhatsOnUrMindAPI();
  return (
    <>
      {/* <ShimmerCard /> */}
      <div className="">
        <WhatsOYMindMobile />
      </div>
    </>
  );
};

export default Offers;
