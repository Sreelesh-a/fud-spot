import { useDispatch, useSelector } from "react-redux";
import { RESTO_IMG_LINK } from "../utils/constants";
import { useState } from "react";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

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
  console.log(cartItems);
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
      <div className="mt-24">
        <div
          className="border-red-500 border-[.1rem] mt-1  scale-90 z-50 absolute right-[42.3%]  bg-white hover:bg-red-500 hover:text-white  font-medium w-32 h-9 flex gap-x-2 p-2 cursor-pointer items-center justify-center rounded-xl text-red-600"
          onClick={() => handleClearCart()}
        >
          <i class="fa-regular fa-trash-can"></i> Clear Cart
        </div>
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
                    <div className="border-[.01rem] w-28 sm:w-[30%] sm:px-4">
                      <div className=" items-center h-10 border-green-600 flex justify-between ">
                        <div
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(res)}
                        >
                          -
                        </div>
                        <span>{res?.count}</span>
                        <div
                          className="cursor-pointer"
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
              <div>No items in cart</div>
            )}
          </div>

          <div className="bg-white w-full max-h-96  sm:w-[38%] py-6  grid grid-cols-1 justify-between px-9">
            <div>
              <div className="bg-white  h-2 text-xl font-bold flex justify-between">
                <span className="">To pay :</span>{" "}
                <span className=" text-green-600">{totalAmount / 100} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
