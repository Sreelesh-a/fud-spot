import { useDispatch } from "react-redux";
import { RESTO_IMG_LINK2 } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { updateCartCount } from "../utils/userSlice";

const ItemsUnderNestedCategories = ({ data }) => {
  const [cartId, setCartId] = useState([]);
  const [addToCartText, setAddToCartText] = useState("ADD");
  const res = data;
  const dispatch = useDispatch();
  const handleAddItems = (res) => {
    dispatch(addItem(res));
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const cartCount =
    cartItems && cartItems.reduce((sum, action) => sum + action?.count, 0);

  dispatch(updateCartCount(cartCount));
  // console.log(cartCount);

  // const getCartIDs = () => {
  //   if (cartItems) {
  //     cartItems.map((res) => setCartId(res?.id));
  //   }
  // };
  // console.log(cartItems);

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
              <div
                className="absolute cursor-pointer   font-bold text-green-600 bottom-[-.01rem] shadow-md mx-6 sm:mx-6  py-1 w-24 h-9 text-center sm:h-8 rounded-lg items-center "
                // onClick={(e) => {
                //   handleAddItems(res?.card?.info);
                //   setAddToCartText("ADDED");
                // }}
              >
                <motion.div
                  whileTap={{
                    scale: 0.9,
                    background: "linear-gradient(145deg, #d6e0f0, #ffffff)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={() => {
                    handleAddItems(res?.card?.info);
                    setAddToCartText("ADDED");
                  }}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    background: "linear-gradient(145deg, #ffffff, #d6e0f0)",
                    border: "none",
                    borderRadius: "0.5rem",
                    outline: "none",
                  }}
                >
                  {addToCartText}
                </motion.div>
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
