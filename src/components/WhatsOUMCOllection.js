import { useParams } from "react-router-dom";
import useWhatsOnUrMindAPI from "../utils/useWhatOnUrMindAPI";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { WithItemLabel } from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";

const WhatsOUMCOllection = () => {
  const { collectionId } = useParams();
  const [itemCards, setItemCards] = useState([]);
  const RestoCardItemOffer = WithItemLabel(RestaurantCard);

  const apiData = useWhatsOnUrMindAPI(collectionId) || [];
  const filteredList =
    itemCards &&
    itemCards.filter(
      (res) =>
        res?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

  console.log(filteredList);

  useEffect(() => {
    if (apiData) {
      setItemCards(apiData?.cards);
    }
  }, [apiData]);

  //   if (!apiData.length == 0) {
  //     return <ShimmerCard />;
  //   }

  //   console.log(filteredListCards);

  return (
    <div className="mt-32 ">
      <div className=" justify-between  grid grid-cols-1 sm:grid-cols-4  gap-x-4 cursor-pointer">
        {filteredList &&
          filteredList.map((rest) => {
            <Link
              key={rest?.card?.card?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/resto-menu/" + rest?.card?.card?.info?.id}
            >
              {rest?.card?.card?.info?.aggregatedDiscountInfoV3 ? (
                <RestoCardItemOffer
                  restData={rest?.card?.card}
                  discountInfo={
                    rest?.card?.card?.info?.aggregatedDiscountInfoV3 || null
                  }
                />
              ) : (
                <RestaurantCard
                  restData={rest?.card?.card}
                  discountInfo={null}
                  discountCheck={false}
                />
              )}
            </Link>;
          })}
      </div>
    </div>
  );
};

export default WhatsOUMCOllection;
