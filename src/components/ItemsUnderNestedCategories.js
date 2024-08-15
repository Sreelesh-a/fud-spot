import { useDispatch } from "react-redux";
import { RESTO_IMG_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
const ItemsUnderNestedCategories = ({ data }) => {
  const [cartId, setCartId] = useState([]);
  const res = data;
  const dispatch = useDispatch();
  const handleAddItems = (res) => {
    dispatch(addItem(res));
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  // const getCartIDs = () => {
  //   if (cartItems) {
  //     cartItems.map((res) => setCartId(res?.id));
  //   }
  // };
  console.log(cartItems);

  return (
    <div>
      <div>
        <div className="">
          <div className=" flex justify-between items-center my-5">
            <div className="w-6/12 sm:w-8/12 space-y-2">
              <div></div>
              <div className=" flex font-semibold text-lg text-gray-600 truncate">
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
                <p className="text-gray-500 text-xs truncate w-[80%]">
                  {res?.card?.info?.description}
                </p>
              </div>
            </div>

            <div className="relative ">
              {res?.card?.info?.imageId ? (
                <img
                  className=" w-36 h-36 rounded-2xl"
                  src={RESTO_IMG_LINK + res?.card?.info?.imageId}
                  alt=""
                />
              ) : (
                <div className="w-36 h-36 rounded-2xl bg-gray-100"></div>
              )}
              <div
                className="absolute bg-white cursor-pointer hover:bg-gray-100  font-bold text-green-600 bottom-[-1rem] shadow-md mx-6 sm:mx-6  py-1 w-24 h-9 text-center sm:h-8 rounded-lg items-center "
                onClick={() => {
                  handleAddItems(res?.card?.info);
                }}
              >
                ADD
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default ItemsUnderNestedCategories;
