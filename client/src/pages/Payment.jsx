import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import mailSender from "../helper/MailSender";
// import mailSender from "../helper/MailSender";

const Payment = () => {
  const location = useLocation();
  const flightData = location.state.flightData;
  const navigate = useNavigate();

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {
      setRazorpayLoaded(true);
    });
  }, []);

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const paymentHandler = async () => {
    const options = {
      key: "rzp_test_iwloD5XK3tXD9v", // Replace with your Razorpay API key
      amount: flightData.totalPrice * 100, // Convert amount to paise
      currency: "INR",
      name: "FLYO",
      description: "Payment for Purchase",
      handler: function (response) {
        const data = {
          razorpay_payment_id: response.razorpay_payment_id,
          // Add other necessary data for your booking
        };
        axios
          .post("http://localhost:8000/api/bookings", flightData)
          .then((response) => {
            console.log(response.data);
            // Send email upon successful booking
            navigate("getBooking");
            // Add success message or redirection if needed
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
            // Add error handling and display error message to the user
          });
        // Add your logic here after successful payment
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const loadScript = (src, onLoad) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = onLoad;
    document.body.appendChild(script);
  };

  // Function to send email
  const sendEmail = async (email, title, body) => {
    try {
      const response = await axios.post("http://localhost:8000/send-email", {
        email,
        title,
        body,
      });
      console.log("Email sent:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="gradient-custom pt-40 h-screen">
      <div className="bg-[#000B2E] mx-auto text-gray-700 w-[50%] h-fit p-5 rounded">
        <h2 className="text-lg font-bold">CONFIRM PAYMENT</h2>
        <p className="text-gray-500">
          Total Price : <span>₹ {flightData.totalPrice}</span>
        </p>
        <button
          className="bg-blue-500 text-white rounded px-3 py-1 mt-5 w-full"
          onClick={paymentHandler}
          disabled={!razorpayLoaded}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
