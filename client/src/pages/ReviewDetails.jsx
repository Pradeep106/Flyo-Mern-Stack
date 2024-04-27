import React, { useState } from "react";
import FlightAirportTime from "../helper/FlightSearch/FlightAirportTime";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineFlight } from "react-icons/md";
import TravelerDetail from "../components/TravellerDetails";
import FlightSeatBooking from "./FlightSeatBooking";
import SidebarReviewDetails from "../components/SidebarReviewDetails";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewDetails = () => {
  const location = useLocation();
  const [flightData, setFlightData] = useState(location.state.flightData);
  const [navigatePayment, setNavigatePayment] = useState(false);

  const calculateTotalPrice = () => {
    const { prices, userData } = flightData;
    let totalPrice = 0;

    userData.passengers.forEach((passenger) => {
      totalPrice += prices[passenger.category] * passenger.count;
    });

    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();
  // console.log("totalPrice", totalPrice);

  const updatedFlightData = { ...flightData, totalPrice };
  console.log("updated flight data", updatedFlightData);

  const navigate = useNavigate();
  navigatePayment ? navigate("/payment",{
    state: { flightData: updatedFlightData },
  }) : "";

  console.log("Flight data", flightData);
  return (
    <section className="flex gradient-custom pt-28 p-10 gap-5  h-full ">
      <div className="bg-[#000B2E] text-gray-600  border-gray-800 rounded-sm p-5 w-[70%] mx-auto flex-col gap-4">
        <div className="  border-gray-800 border p-3 text-sm">
          <div className=" font-bold text-lg flex items-center  gap-5">
            <p className="w-auto">{flightData.fromAirport.city}</p>
            <div className="  text-blue-500">
              <BsArrowRight />
            </div>
            <p className=" w-auto">{flightData.toAirport.city}</p>
          </div>
          <div className="flex gap-5">
            <p className=" bg-blue-500 rounded-sm text-white px-1">
              Fiday, Apr 19
            </p>
            <p>
              Stops {flightData.stops} {flightData.duration}
            </p>
          </div>
          <div className="flex justify-between pt-4 pb-4">
            <p className="font-semibold text-sm">
              {flightData.airlineName}
              <span className="font-normal ml-2 text-gray-600">
                {flightData.airlineModel}
              </span>{" "}
            </p>
            <p>Economy</p>
          </div>
          <div className=" bg-[#061239] rounded-md">
            <div className="flex items-center gap-10  p-5 ">
              <div className="flex flex-col gap-8">
                <FlightAirportTime
                  airport={flightData.fromAirport.city}
                  time={flightData.departureTime}
                />
                <FlightAirportTime
                  airport={flightData.toAirport.city}
                  time={flightData.arrivalTime}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 border-[1.5px] border-[#000B2E]"></div>
                <div className="border-[1.5px] border-dashed border-gray-500 h-8"></div>
                <MdOutlineFlight className="text-blue-400 text-lg rotate-180" />
                <div className="border-[1.5px] border-dashed border-gray-500 h-8"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400 border-[1.5px] border-[#000B2E]"></div>
              </div>
              <div className="flex tracking-wide flex-col gap-5">
                <p>{flightData.fromAirport.name}</p>
                <p>{flightData.duration}</p>
                <p>{flightData.toAirport.name}</p>
              </div>
            </div>
            <div className="flex justify-between border-t p-4 ">
              <p>Cabin Baggage:8 Kgs / Adult</p>
              <p>Check-In Baggage:25 Kgs / Adult</p>
            </div>
          </div>
        </div>
        <FlightSeatBooking />
        <TravelerDetail
          setFlightData={setFlightData}
          flightData={flightData}
          setNavigatePayment={setNavigatePayment}
        />
      </div>
      <SidebarReviewDetails totalPrice={totalPrice} />
    </section>
  );
};

export default ReviewDetails;
