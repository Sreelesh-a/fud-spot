import { RESTO_IMG_LINK } from "../utils/constants";
const ItemsUnderNestedCategories = ({ data }) => {
  const res = data;

  return (
    <div>
      <div>
        <div className="my-5" key="res?.card?.info?.id">
          <div className=" flex justify-between items-center my-10">
            <div className="w-8/12 space-y-2">
              <div></div>
              <div className=" flex font-semibold text-lg text-gray-600">
                {res?.card?.info?.name}
              </div>
              <div className=" flex font-medium ">
                ₹
                {res?.card?.info?.finalPrice
                  ? res?.card?.info?.finalPrice / 100
                  : res?.card?.info?.defaultPrice
                  ? res?.card?.info?.defaultPrice / 100
                  : res?.card?.info?.price / 100}
              </div>

              {res?.card?.info?.ratings?.aggregatedRating?.rating && (
                <div className=" flex  text-sm">
                  <span className="text-green-600 font-semibold  items-center flex mr-[.2rem]">
                    <i class="fa-solid fa-star text-green-600 fa-xs mr-[.2rem]"></i>
                    {res?.card?.info?.ratings?.aggregatedRating?.rating}
                  </span>
                  <span className="text-gray-500">
                    ({res?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                </div>
              )}
              <div>
                <p className="text-gray-500 text-xs">
                  {res?.card?.info?.description}
                </p>
              </div>
            </div>

            <div className="relative ">
              {res?.card?.info?.imageId ? (
                <img
                  className="w-36 h-36 rounded-2xl"
                  src={RESTO_IMG_LINK + res?.card?.info?.imageId}
                  alt=""
                />
              ) : (
                <div className="w-36 h-36 rounded-2xl bg-gray-100"></div>
              )}
              <div className="absolute bg-white cursor-pointer hover:bg-gray-100  font-bold text-green-600 bottom-[-1rem] shadow-md mx-6 py-1  px-7 w-24 h-8 rounded-lg items-center ">
                ADD
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </div>
  );
};

export default ItemsUnderNestedCategories;
