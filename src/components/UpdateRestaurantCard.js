import { useState } from "react";

const UpdateRestaurantCard = () => {
  const payload = {
    lat: 9.9312328,
    lng: 76.26730409999999,
  };
  const payloadString = new URLSearchParams(payload).toString();

  return (
    <div>
      <div>hai</div>
      <h1 className="justify-center text-xl font-semibold">{payloadString}</h1>
    </div>
  );
};

export default UpdateRestaurantCard;
