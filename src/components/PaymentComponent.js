import React, { useState } from "react";

const PaymentComponent = ({ amount }) => {
  const [paymentSuccessState, setPaymentSuccessState] = useState(null);
  const handlePayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      name: "Cropacity",
      description: "Test Transaction",
      handler: function (response) {
        alert(
          "Payment successful. Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Your Kozhikode, Kerala",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
