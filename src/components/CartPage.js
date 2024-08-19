import { useDispatch, useSelector } from "react-redux";
import { RESTO_IMG_LINK } from "../utils/constants";
import { useState } from "react";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import cartIMG from "../../img/cartIMG.png";
import PaymentComponent from "./PaymentComponent";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount =
    cartItems &&
    cartItems.reduce(
      (sum, items) =>
        sum +
        (items?.price * items?.count ||
          items?.defaultPrice * items?.count ||
          0),
      0
    );

  //   console.log(totalAmount);

  //   const [totalAmount,setTotalAmount]

  const dispatch = useDispatch();
  const handleAddItem = (res) => {
    dispatch(addItem(res));
  };
  const handleRemoveItem = (res) => {
    dispatch(removeItem(res));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-[#E9ECEE] px-2 sm:px-40 py-2  sm:mb-0 mb-52 sm:py-6    ">
      <div className="relative mt-24">
        {cartItems.length != 0 && (
          <div
            className="border-red-500 border-[.1rem] mt-1  scale-90 z-100 absolute right-[10%] sm:right-[42.3%]  bg-white hover:bg-red-500 hover:text-white  font-medium w-32 h-9 flex gap-x-2 p-2 cursor-pointer items-center justify-center rounded-xl text-red-600"
            onClick={() => handleClearCart()}
          >
            <i class="fa-regular fa-trash-can"></i> Clear Cart
          </div>
        )}

        <div className="p-4 sm:px-1  flex flex-wrap justify-between w-full">
          <div className="bg-white w-full sm:w-[60%] items-start py-6 h-auto grid grid-cols-1 justify-between px-6 sm:px-9">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((res, index) => {
                // console.log(res);
                return (
                  <div
                    className="flex sm:px-4 items-center py-4 justify-between gap-x-4 w-full"
                    key={index}
                  >
                    <div className="sm:w-[43%]  sm:flex  gap-x-4 items-center">
                      <div className="relative overflow-hidden bg-gray-200 size-20  sm:size-16 rounded-lg">
                        {res?.imageId && (
                          <img
                            className="w-full h-full object-cover"
                            src={RESTO_IMG_LINK + res?.imageId}
                          />
                        )}
                      </div>
                      <div className="sm:font-medium text-sm  sm:text-lg w-24 truncate sm:w-40">
                        {res?.name}
                      </div>
                    </div>
                    <div className="border-[.1rem] rounded-md px-3 border-green-600 sm:border-[.01rem] w-28 sm:w-[30%] sm:px-4">
                      <div className=" items-center h-10 flex justify-between ">
                        <div
                          className="cursor-pointer text-xl font-bold text-gray-400"
                          onClick={() => handleRemoveItem(res)}
                        >
                          -
                        </div>
                        <span>{res?.count}</span>
                        <div
                          className="cursor-pointer text-xl font-bold text-green-600"
                          onClick={() => handleAddItem(res)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="sm:w-[10%]">
                      ₹
                      {(res?.price / 100) * res?.count ||
                        (res?.defaultPrice / 100) * res?.count}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="mx-auto my-auto sm:mt-2 sm:py-4  mt-10">
                <div className="text-center text-lg font-semibold text-gray-600 ">
                  Your cart is empty
                </div>
                <div className="mx-auto text-center text-xs ">
                  You can go to home page to view more restaurants
                </div>
                <Link to="/">
                  <div className="font-bold my-3 bg-[#FF5200] w-60 h-10 mx-auto flex justify-center items-center text-white ">
                    See restaurants near you
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div className="bg-white w-full max-h-96  sm:w-[38%] py-6  grid grid-cols-1 justify-between px-9">
            <div>
              {cartItems.length !== 0 ? (
                <div className=" flex flex-wrap gap-y-10">
                  <div className="bg-white  h-2 text-xl font-bold flex justify-between w-full">
                    <span className="">To pay :</span>{" "}
                    <span className=" text-green-600">
                      {totalAmount / 100}{" "}
                    </span>
                  </div>
                  <div className="">
                    <PaymentComponent amount={totalAmount / 100} />
                  </div>
                </div>
              ) : (
                <div className="mx-auto my-auto">
                  <img
                    className="w-36 mx-auto my-auto opacity-80"
                    src={cartIMG}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
