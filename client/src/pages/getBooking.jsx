import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingCard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/bookings");
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-[#000B2E] pb-10 pt-32 ">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.id}
            className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
            <div className="p-8">
              <p className="font-bold text-white text-lg">{booking.airlineName}</p>
              <p className="text-gray-500">
                From: {booking.fromAirport?.name}, {booking.fromAirport?.city} (
                {booking.fromAirport?.code})
              </p>
              <p className="text-gray-500">
                To: {booking.toAirport?.name}, {booking.toAirport?.city} (
                {booking.toAirport?.code})
              </p>
              <p className="text-gray-500">
                Departure Time:{" "}
                {new Date(booking.departureTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="text-gray-500">Duration: {booking.duration}</p>
              <p className="text-gray-500">Price: ₹{booking.prices?.adult}</p>
              {/* <div className="mt-4">
                <p className="font-semibold">Passenger Names:</p>
                <ul>
                  {booking.userData?.passengers?.map((passenger, index) => (
                    <li key={index}>
                      {passenger.firstName} {passenger.lastName}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingCard;
