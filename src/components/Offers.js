import { useState, useEffect } from "react";
import MenuPageShimmerUI from "./MenuPageShimmerUI";
import useWhatsOnUrMindAPI from "../utils/useWhatOnUrMindAPI";
import ShimmerCard from "./ShimmerCard";

const Offers = () => {
  const whatsOnUrMindData = useWhatsOnUrMindAPI();
  return (
    <>
      <ShimmerCard />
    </>
  );
};

export default Offers;
