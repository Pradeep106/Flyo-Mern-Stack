import React, { useState } from "react";
import FlightAirportTime from "../helper/FlightSearch/FlightAirportTime";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineFlight } from "react-icons/md";
import TravelerDetail from "../components/TravellerDetails";
import FlightSeatBooking from "./FlightSeatBooking";
import SidebarReviewDetails from "../components/SidebarReviewDetails";

const ReviewDetails = () => {
  const [checked, setChecked] = useState(false);

  return (
    <section className="flex gradient-custom pt-28 p-10 gap-5  h-full ">
      <div className="bg-white border shadow-lg rounded-sm p-5 w-[70%] mx-auto flex-col gap-4">
        <div className=" border p-3 shadow-md text-sm shadow-gray-300">
          <div className=" font-bold text-lg flex items-center  gap-5">
            <p className="w-auto">New Delhi</p>
            <div className=" bg-white text-blue-500">
              <BsArrowRight />
            </div>
            <p className=" w-auto">Mumbai</p>
          </div>
          <div className="flex gap-5">
            <p className=" bg-blue-500 rounded-sm text-white px-1">
              Fiday, Apr 19
            </p>
            <p>Non stop 2h 15m</p>
          </div>
          <div className="flex justify-between pt-4 pb-4">
            <p className="font-semibold text-sm">
              Air India{" "}
              <span className="font-normal ml-2 text-gray-600">Ai856</span>{" "}
            </p>
            <p>Economy</p>
          </div>
          <div className=" bg-gray-100 rounded-md">
            <div className="flex items-center gap-10  p-5 ">
              <div className="flex flex-col gap-8">
                <FlightAirportTime />
                <FlightAirportTime />
              </div>
              <div className="flex flex-col justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 border-[1.5px] border-blue-200"></div>
                <div className="border-[1.5px] border-dashed border-gray-400 h-8"></div>
                <MdOutlineFlight className="text-gray-500 text-lg rotate-180"/>
                <div className="border-[1.5px] border-dashed border-gray-400 h-8"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400 border-[1.5px] border-blue-200"></div>
              </div>
              <div className="flex tracking-wide flex-col gap-5">
                <p>Indira Gandhi International Airport, Terminal T3</p>
                <p>2h 30min</p>
                <p>Indira Gandhi International Airport, Terminal T3</p>
              </div>
            </div>
            <div className="flex justify-between border-t p-4 ">
              <p>Cabin Baggage:8 Kgs / Adult</p>
              <p>Check-In Baggage:25 Kgs / Adult</p>
            </div>
          </div>
        </div>
     
        <FlightSeatBooking />
        <TravelerDetail />
      </div>
      <SidebarReviewDetails />
    </section>
  );
};

export default ReviewDetails;
