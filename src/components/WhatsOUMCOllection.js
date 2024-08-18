import { useParams } from "react-router-dom";
import useWhatsOnUrMindAPI from "../utils/useWhatOnUrMindAPI";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { WithItemLabel } from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import { title } from "process";
import TopRestoMobileShimmer from "../utils/TopRestoMobileShimmer";

const WhatsOUMCOllection = () => {
  const { collectionId } = useParams();
  // console.log(collectionId.slice(5));
  const [itemCards, setItemCards] = useState([]);
  const RestoCardItemOffer = WithItemLabel(RestaurantCard);

  const [checkCardEmpty, setCheckCardEmpty] = useState(false);

  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  const apiData = useWhatsOnUrMindAPI(collectionId.slice(0, 5)) || [];
  const filteredList =
    itemCards &&
    itemCards.filter(
      (res) =>
        res?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

  // console.log(filteredList);

  useEffect(() => {
    if (apiData) {
      setItemCards(apiData?.cards);
    }
    if (itemCards) {
      if (itemCards.length == 3) {
        setCheckCardEmpty(true);
      }
    }
  }, [apiData, itemCards]);

  //   if (!apiData.length == 0) {
  //     return <ShimmerCard />;
  //   }
  let collectionTitle = null;
  let itemID = null;
  const regex = /^(\d+)([a-zA-Z].+)?/;
  const matchRegex = regex.exec(collectionId);
  if (matchRegex) {
    collectionTitle = matchRegex[2];
    itemID = matchRegex[1];
  }
  // console.log(matchRegex);
  // console.log(collectionId);

  const ShimmerUi = () => {
    if (!filteredList) {
      return (
        <div>
          <div className="hidden sm:block">
            <ShimmerCard />
          </div>
          <div className="sm:hidden">
            <TopRestoMobileShimmer />
            <TopRestoMobileShimmer />
          </div>
        </div>
      );
    }
  };

  // if (apiData?.cards.length == 3) {
  //   setCheckCardEmpty(true);
  // }

  console.log(checkCardEmpty);
  console.log(apiData);
  console.log(itemCards);

  const EmptyMessage = () => {
    if (checkCardEmpty) {
      return (
        <div className="py-10 ">
          <div className=" py-6 bg-gray-100   text-center  p-6 font-semibold  flex flex-wrap justify-center gap-y-1">
            <span className="w-full text-2xl text-gray-600">
              Oops, this section is empty!
            </span>
            <span className="text-sm font-normal ">
              Explore our other delicious options while we restock this section.
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="my-32 px-7 sm:px-44">
        <div>
          <div className="font-bold text-3xl font-[montserrat]">
            {collectionTitle}
          </div>
          <span className="text-gray-500 font-[montserrat] text-[.7rem] sm:text-md">
            Satisfy your cravings for South Indian food with these{" "}
            {collectionTitle}
          </span>
        </div>

        <div className="font-bold text-2xl mt-6 ">Restaurants to explore</div>

        <ShimmerUi />
        <ShimmerUi />
        <div className=" justify-between  grid grid-cols-1 sm:grid-cols-4  gap-x-4 cursor-pointer ">
          {filteredList &&
            filteredList.map((rest) => (
              <Link
                onClick={handleClickTop}
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
              </Link>
            ))}
        </div>

        <div className="">
          <EmptyMessage />
        </div>
      </div>
    </div>
  );
};

export default WhatsOUMCOllection;
