import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowSignUpContext } from "../app";
// import { paymentStatusUpdate } from "../utils/userSlice";
import { paymentStatusUpdate } from "../utils/userSlice";
import { logoHeaderImgMob } from "../utils/imageConstants";

const PaymentComponent = ({ amount }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    paymentID: null,
    status: null,
    orders: null,
    amountPaid: null,
  });

  const { showSigup, setShowSignup } = useContext(ShowSignUpContext);

  const [paymentSuccessState, setPaymentSuccessState] = useState(false);
  const loginStatusCheck = useSelector((store) => store.user.loginStatus);

  const userData = useSelector((store) => store.user.userData);
  // const OrdersList = useSelector((store) => store.cart.items);

  const handleSignUp = showSigup;
  const cartItems = useSelector((store) => store.cart.items);

  const dispath = useDispatch();
  dispath(paymentStatusUpdate(paymentDetails));

  const convertTimeFormat = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(":");

    const formattedHours = parseInt(hours) % 12 || 12;
    const formattedMinutes = minutes.padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_8vmABvQnXhmXnw",
      amount: amount * 100,
      currency: "INR",
      image: "https://i.ibb.co/CJ0F76p/favicon-32x32.png",
      name: "Fudspot",
      description: "Test Transaction",
      handler: function (response) {
        const paymentTime = convertTimeFormat(new Date().toLocaleTimeString());

        setPaymentDetails((res) => ({
          paymentID: response.razorpay_payment_id,
          status: true,
          orders: cartItems,
          time: paymentTime,
          amountPaid: amount,
        }));

        setPaymentSuccessState(true);

        // alert(
        //   "Payment successful. Payment ID: " + response.razorpay_payment_id
        // );
      },
      prefill: {
        name: userData && userData.name,
        email: userData && userData.email,
        contact: userData && userData.mobile,
      },
      notes: {
        address: "Your Kozhikode, Kerala",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    if (loginStatusCheck) {
      rzp.open();
    } else {
      setShowSignup(true);
    }
  };

  return (
    <div>
      <button
        className="bg-[#5FB246] text-white px-3 py-2 font-bold "
        onClick={handlePayment}
      >
        PROCEED TO PAY
      </button>
    </div>
  );
};

export default PaymentComponent;
