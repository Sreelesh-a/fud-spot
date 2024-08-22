import { redirect } from "react-router-dom";
import PaymentSuccess from "../utils/icons/PaymentSuccess";
import { useNavigate } from "react-router-dom";

const PaymentSuccessBanner = () => {
  return (
    <div className="absolute z-10 bg-white w-full sm:w-[40%] top-[5.2rem]    py-10 lg:py-20 md:py-16  right-0 sm:right-[30%]">
      <div className="absolute top-8 left-10">
        <i class="fa-solid fa-xmark text-xl text-gray-400  "></i>
      </div>
      <div className=" flex justify-center items-center py-4 ">
        <div className="pymnt successfull grid grid-cols-1 space-y-[.6rem] sm:space-y-9 text-center">
          <div className="text-gray-500 font-semibold ">Payment Details</div>
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
          <div className="font-bold text-2xl text-gray-700">₹100</div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 ">
        <div className="">
          <div className="flex justify-between space-x-16 tet-xs">
            <div className="text-start text-gray-500">
              Payment_ID :<br />
              <span className="text-gray-600 font-bold text-lg">
                {"p_898688 "}
              </span>
            </div>
            <div className="text-end text-gray-500">
              Date & Time :<br />
              <span className="text-gray-600 font-bold text-lg">
                {"10/02/2029 "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 sm:py-11 sm:scale-110 ">
        <div className="bg-[#36C073] text-white font-semibold px-6 py-4 rounded-lg">
          Go to Order Page
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessBanner;
