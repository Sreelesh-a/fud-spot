import { Link, redirect } from "react-router-dom";
import PaymentSuccess from "../utils/icons/PaymentSuccess";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { paymentStatusChange } from "../utils/userSlice";

const PaymentSuccessBanner = () => {
  const paymentDetails = useSelector((store) => store.user.paymentStatus);
  const paymentDate = new Date().toLocaleDateString();

  const navigateCart = useNavigate();
  const dispatch = useDispatch();

  const handlePaymentBannerClose = () => {
    // navigateCart("/cart");
    dispatch(paymentStatusChange(false));
  };
  console.log(paymentDetails);

  // if(paymentDetails?.status){

  // }

  return (
    <div className="absolute z-10 bg-white w-full   h-screen md:w-[60%] lg:w-[40%] top-0 sm:top-[5.2rem]    py-0 lg:py-6 md:py-16  right-0 md:right-[20%] lg:right-[30%]">
      {/* <div
        className="absolute bottom-14 sm:bottom-auto sm:top-8 right-10  sm:left-10 cursor-pointer flex items-center gap-x-1"
        onClick={handlePaymentBannerClose}
      >
        <i class="fa-solid fa-xmark text-xl text-gray-400  "></i>{" "}
        <span className="sm:hidden">Close</span>
      </div> */}

      <div className=" flex justify-center items-center  py-12 sm:py-4 ">
        <div className="pymnt successfull grid grid-cols-1 space-y-[.6rem] sm:space-y-6 text-center">
          <div className="text-gray-500 font-semibold sm:py-0 py-3">
            Payment Details
          </div>
          <div className="">
            <svg
              viewBox="0 0 20 20"
              className="w-20 text-[#36C073] animate-pulse mx-auto"
            >
              {PaymentSuccess()}
            </svg>
          </div>
          <div className="font-bold text-xl sm:text-2xl text-gray-600">
            Payment Successful!
          </div>
          <div className="font-bold text-4xl text-gray-600">
            ₹{paymentDetails?.amountPaid}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center sm:py-4 ">
        <div className="">
          <div className="flex flex-wrap items-center  justify-center sm:justify-between sm:space-y-0 space-y-4  sm:space-x-16 text-xs">
            <div className=" sm:text-start text-center w-full sm:w-auto text-xs text-gray-500">
              Payment_ID :<br />
              <span className="text-gray-600 font-semibold text-sm">
                {paymentDetails?.paymentID}
              </span>
            </div>
            <div className="text-center sm:text-end text-xs text-gray-500">
              Date & Time :<br />
              <span className="text-gray-600 font-semibold text-sm ">
                {paymentDate}
                {"  |  "} {paymentDetails?.time}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center py-12 sm:py-11 sm:scale-110 ">
        <Link to="/">
          <div
            className="bg-[#36C073] text-white font-semibold px-6 py-4 rounded-lg w-full"
            onClick={handlePaymentBannerClose}
          >
            Explore more
          </div>
        </Link>
        <div
          className="px-6 py-10 text-xl text-gray-500 w-full text-center cursor-pointer"
          onClick={handlePaymentBannerClose}
        >
          <i class="fa-solid fa-xmark text-xl text-gray-400  "></i>{" "}
          <span className="">Close</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessBanner;
