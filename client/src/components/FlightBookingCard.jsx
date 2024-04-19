import React, { useState } from "react";
import TabComponent from "../helper/FlightSearch/Tab";
import { useNavigate } from "react-router-dom";
import FlightAirportTime from "../helper/FlightSearch/FlightAirportTime";

const FlightBookingCard = () => {
  const [viewFlightDetails, setViewFlightDetails] = useState();

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/reviewDetails");
  };

  return (
    <section className="bg-white  h-fit rounded-sm w-full mt-10">
      <div className="p-5 border  flex justify-evenly gap-5">
        <div>
          <p className="text-lg font-bold">Indigo</p>
          <p className="block text-[12px] font-medium text-gray-500">123456</p>
        </div>
        <FlightAirportTime />
        <div className=" flex flex-col">
        <p>06h 05m</p>
        <div className=" w-full h-0.5 bg-blue-500 rounded"></div>
        </div>
        
        <FlightAirportTime />
        <div>
          <p className="text-lg font-bold">₹ 5,729</p>
          <p className="block text-[12px] font-medium text-gray-700">
            Per adult
          </p>
        </div>
        <div className="flex gap-3 flex-col">
          <button
            className="text-md bg-blue-200 border rounded-full px-2 text-blue-500 border-blue-500 "
            onClick={onClickHandler}>
            Book Now
          </button>

          <button
            className="text-[13px] rounded-full px-2 text-blue-500 "
            onClick={() => setViewFlightDetails(!viewFlightDetails)}>
            {viewFlightDetails ? "Hide flight details" : "View flight Details"}
          </button>
        </div>
      </div>
      {viewFlightDetails ? (
        <div className=" bg-gray-50 rounded-sm transition-all duration-500   p-5">
          {" "}
          <TabComponent />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default FlightBookingCard;
