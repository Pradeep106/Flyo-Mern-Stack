import React, { useState } from "react";
import FlightAirportTime from "../helper/FlightSearch/FlightAirportTime";
import TravelerDetail from "../components/TravellerDetails";
import FlightSeatBooking from "./FlightSeatBooking";

const ReviewDetails = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-gray-400 ">
     
        <div className="container w-full mx-auto">
          <div className=" flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black">
              Cancellation Refund Policy
            </h3>
              <p className="linkText">View Policy</p>
          </div>
          <div className="flightDetails reviewCanPolicyWrapper bg-white rounded-lg shadow-md p-6">
            <div className="cancSecWrap">
              <p className="flightDetailsInfo flex items-center">
                <span className="singleairline">
                  <span
                    className="arln-logo logo1"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=1")',
                    }}></span>
                </span>
                <span className="text-black darkText ml-2">DEL-BOM</span>
              </p>
              <div className="timeLineDetailsInfo flex">
                <div className="">
                  <p className="mb-2">Cancellation Penalty :</p>
                  <p>Cancel Between (IST) :</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>


      <FlightSeatBooking />
      <input type="checkbox" />
      <TravelerDetail />
    </div>
  );
};

export default ReviewDetails;
