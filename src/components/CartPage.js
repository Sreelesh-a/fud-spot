import { useDispatch, useSelector } from "react-redux";
import { RESTO_IMG_LINK } from "../utils/constants";
import { useEffect, useState } from "react";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import cartIMG from "../../img/cartIMG.png";
import PaymentComponent from "./PaymentComponent";
import PaymentSuccessBanner from "./PaymentSuccessBanner";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [handlePaymentSuccess, setHandlePaymentSuccess] = useState(false);
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
  const paymentDetails = useSelector((store) => store.user.paymentStatus);

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

  // if (paymentDetails?.status) {
  //   setHandlePaymentSuccess(true);
  // }
  // useEffect(() => {}, [paymentDetails]);
  const ShowPaymentSuccess = () => {
    if (paymentDetails?.status) {
      dispatch(clearCart());
      window.scrollTo(0, 0);
      return <PaymentSuccessBanner />;
    }
  };

  // const handleClickTop = () => {
  //   window.scrollTo(0, 0);
  // };

  const paisaFormatter = (paisa) => {
    const rupees = paisa / 10;
    return Math.round(rupees) / 10;
  };

  return (
    <div>
      {/* {handlePaymentSuccess && (
        <PaymentSuccessBanner handle={setHandlePaymentSuccess} />
      )} */}
      <ShowPaymentSuccess />
      <div className="bg-[#E9ECEE] px-2 md:px-10 lg:px-40 py-2  lg:mb-0 mb-52 lg:py-6    ">
        <div className="relative mt-24">
          {cartItems.length != 0 && (
            <div
              className="border-red-500 border-[.1rem] mt-1  scale-90 z-100 absolute right-[10%] lg:right-[42.3%]  bg-white hover:bg-red-500 hover:text-white  font-medium w-32 h-9 flex gap-x-2 p-2 cursor-pointer items-center justify-center rounded-xl text-red-600"
              onClick={() => handleClearCart()}
            >
              <i class="fa-regular fa-trash-can"></i> Clear Cart
            </div>
          )}

          <div className="p-4 lg:px-1  flex flex-wrap gap-3 justify-between w-full">
            <div className="bg-white w-full lg:w-[60%] items-start py-6 h-auto grid grid-cols-1 justify-between px-6 lg:px-9">
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((res, index) => {
                  return (
                    <div
                      className="flex lg:px-4 items-center py-4 justify-between gap-x-4 w-full"
                      key={index}
                    >
                      <div className="lg:w-[43%] w-[30%] md:flex sm:space-y-0   lg:flex  gap-x-4 items-center">
                        <div className="relative overflow-hidden bg-gray-200  w-22 h-14 lg:size-16  rounded-lg">
                          {res?.imageId ? (
                            <img
                              className="w-full h-full object-cover"
                              src={RESTO_IMG_LINK + res?.imageId}
                            />
                          ) : (
                            <div className="relative animate-pulse w-36 h-36 rounded-2xl bg-gray-100">
                              <i class="object-cover fa-solid fa-bowl-food text-5xl text-gray-300 ml-[10%] mt-[10%]"></i>
                            </div>
                          )}
                        </div>
                        <div className="lg:font-medium text-sm  lg:text-lg w-24 truncate md:w-20 lg:w-40">
                          {res?.name}
                        </div>
                      </div>
                      <div className="border-[.1rem] sm:mb-0 mb-4  rounded-md px-3 border-green-600 lg:border-[.01rem] w-[35%] lg:w-[30%] sm:px-4">
                        <div className=" items-center   h-10 sm:h-10 flex justify-between ">
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
                      <div className="w-[20%] text-start lg:w-[10%] sm:mb-0 mb-5">
                        ₹
                        {paisaFormatter(res?.price) * res?.count ||
                          paisaFormatter(res?.defaultPrice) * res?.count}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="mx-auto my-auto lg:mt-2 lg:py-4  mt-10">
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

            <div className="bg-white w-full max-h-96  lg:w-[38%] py-6 sm:py-6  grid grid-cols-1 justify-between px-9">
              <div>
                {cartItems.length !== 0 ? (
                  <div className=" flex flex-wrap gap-y-10">
                    <div className="bg-white  h-2 text-xl font-bold flex justify-between w-full">
                      <span className="">To pay :</span>{" "}
                      <span className=" text-green-600">
                        ₹ {totalAmount / 100}{" "}
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
    </div>
  );
};

export default CartPage;
