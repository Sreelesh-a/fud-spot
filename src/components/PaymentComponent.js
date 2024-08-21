import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowSignUpContext } from "../app";
// import { paymentStatusUpdate } from "../utils/userSlice";
import { paymentStatusUpdate } from "../utils/userSlice";

const PaymentComponent = ({ amount }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    paymentID: null,
    status: null,
    orders: null,
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

  // console.log(cartItems);

  // console.log(paymentStatusCheck);
  const handlePayment = () => {
    const options = {
      key: "rzp_test_fRX19y3ulO6D3U",
      amount: amount * 100,
      currency: "INR",
      name: "Fudspot",
      description: "Test Transaction",
      handler: function (response) {
        setPaymentDetails((res) => ({
          paymentID: response.razorpay_payment_id,
          status: true,
          orders: cartItems,
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
