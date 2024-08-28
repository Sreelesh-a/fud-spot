import { useDispatch } from "react-redux";
import { RESTO_IMG_LINK2 } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { updateCartCount } from "../utils/userSlice";

const ItemsUnderNestedCategories = ({ data }) => {
  const [cartId, setCartId] = useState([]);

  const [addToCartText, setAddToCartText] = useState("ADD");
  const [totalCartCount, setTotalCartCount] = useState(0);
  const res = data;
  const dispatch = useDispatch();
  const handleAddItems = (resp) => {
    dispatch(addItem(resp));
  };
  const handleRemoveItem = (resp) => {
    dispatch(removeItem(resp));
  };

  const cartItems = useSelector((store) => store.cart.items);

  const cartCount =
    cartItems && cartItems.reduce((sum, action) => sum + action?.count, 0);

  const getCartCountByFiltering = cartItems.filter(
    (cart) => cart?.id == res?.card?.info?.id
  );

  const currentItemCount = getCartCountByFiltering[0]?.count || 0;

  const [handleAddToCart, setHandleAddTocart] = useState(currentItemCount > 0);

  useEffect(() => {
    setHandleAddTocart(currentItemCount > 0);
  }, [currentItemCount]);

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
                  src={RESTO_IMG_LINK2 + res?.card?.info?.imageId}
                  alt=""
                />
              ) : (
                <div className="relative animate-pulse w-36 h-36 rounded-2xl bg-gray-100">
                  <i class="object-cover fa-solid fa-bowl-food text-5xl text-gray-300 ml-[30%] mt-[30%]"></i>
                </div>
              )}
              {handleAddToCart ? (
                <div
                  className="absolute cursor-pointer bg-white    font-bold text-green-600 bottom-[-.89rem] shadow-md mx-4 sm:mx-4   w-28 h-10 text-center sm:h-9.5 rounded-lg items-center "
                  // onClick={(e) => {
                  //   handleAddItems(res?.card?.info);
                  //   // setAddToCartText("ADDED");
                  // }}
                >
                  <div className="border-[.01rem]   rounded-md px-3 border-green-600 lg:border-[.01rem]  sm:px-4">
                    <div className=" items-center   h-10 sm:h-10 flex justify-between ">
                      <div
                        className="cursor-pointer text-xl font-bold text-gray-400 p-2"
                        onClick={() => {
                          handleRemoveItem(res?.card?.info);
                        }}
                      >
                        -
                      </div>
                      <span>{currentItemCount}</span>
                      <div
                        className="cursor-pointer text-xl font-bold text-green-600 p-2"
                        onClick={() => handleAddItems(res?.card?.info)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="absolute cursor-pointer bg-gray-100    font-bold text-green-600 bottom-[-.89rem] shadow-md mx-6 sm:mx-6  py-1 w-24 h-9 text-center sm:h-9.5 rounded-lg items-center "
                  onClick={(e) => {
                    handleAddItems(res?.card?.info);
                    // setAddToCartText("ADDED");
                    setHandleAddTocart(true);
                  }}
                >
                  <div>{addToCartText}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default ItemsUnderNestedCategories;
