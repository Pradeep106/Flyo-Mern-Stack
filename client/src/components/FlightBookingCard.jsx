import React, { useState } from "react";
import TabComponent from "../helper/FlightSearch/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import FlightAirportTime from "../helper/FlightSearch/FlightAirportTime";

const FlightBookingCard = ({ filteredData }) => {
  const [viewFlightDetails, setViewFlightDetails] = useState(false); // Set initial state for viewFlightDetails

  const location = useLocation();
  const [userData, setUserData] = useState(location.state.userData);
  // console.log("user data", userData);

  const navigate = useNavigate();

  const onClickHandler = (item) => {
    const flightDataWithUserData = { ...item, userData };
    console.log("flight data with user data", flightDataWithUserData);
    navigate("/reviewDetails", {
      state: { flightData: flightDataWithUserData },
    });
  };

  return (
    <section className="bg h-fit rounded-sm w-full mt-10 text-gray-700 ">
      {filteredData.map((item) => (
        <div key={item.id}>
          <div className="p-5 bg-[#000B2E] mt-3 border-b border-gray-800 flex justify-evenly gap-5">
            <div>
              <p className="text-lg font-bold">{item.airlineName}</p>
              <p className="block text-[12px] font-medium text-gray-500">
                {item.airlineModel}
              </p>
            </div>
            <FlightAirportTime
              airport={item.fromAirport.city}
              time={item.departureTime}
            />
            <div className="flex flex-col">
              <p>{item.duration}</p>
              <div className="w-full h-0.5 bg-blue-500 rounded"></div>
            </div>
            <FlightAirportTime
              airport={item.toAirport.city}
              time={item.departureTime}
            />
            <div>
              <p className="text-lg font-bold">₹{item.prices.adult}</p>
              <p className="block text-[12px] font-medium text-gray-700">
                Per adult
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              <button
                className="text-md bg-blue-500 border rounded-full px-2 text-white border-blue-500 "
                onClick={() => onClickHandler(item)}>
                {" "}
                {/* Pass an arrow function */}
                Book Now
              </button>
              <button
                className="text-[13px] rounded-full px-2 text-blue-500 "
                onClick={() => setViewFlightDetails(!viewFlightDetails)}>
                {viewFlightDetails
                  ? "Hide flight details"
                  : "View flight Details"}
              </button>
            </div>
          </div>
          {viewFlightDetails && (
            <div className="bg-[#000B2E] rounded-sm transition-all duration-500 p-5">
              <TabComponent item={item} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FlightBookingCard;
