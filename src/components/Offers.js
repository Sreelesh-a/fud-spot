import { useState, useEffect } from "react";
import MenuPageShimmerUI from "./MenuPageShimmerUI";
import useWhatsOnUrMindAPI from "../utils/useWhatOnUrMindAPI";

const Offers = () => {
  const whatsOnUrMindData = useWhatsOnUrMindAPI();
  return (
    <>
      <MenuPageShimmerUI />
    </>
  );
};

export default Offers;
