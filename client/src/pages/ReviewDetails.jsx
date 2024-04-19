import React from "react";
import FlightAirportTime from "../helper/FlightSearch/FlightAirportTime";

const ReviewDetails = () => {
  return (
    <div className="bg-white">
      <p>New Delh Mumbai</p>
      <p>Fiday, Apr 19</p>
      <p>Non stop 2h 15m</p>
      <p>Air India Ai856</p>
      <p>Economy</p>
      <FlightAirportTime />
      <p>Indira Gandhi International Airport, Terminal T3</p>
      <FlightAirportTime />
      <p>Indira Gandhi International Airport, Terminal T3</p>
      <p>Cabin Baggage:8 Kgs / Adult</p>
      <p>Check-In Baggage:25 Kgs / Adult</p>
      <div>
        <h1>Cancellation Refund Policy</h1>
        <p>DEL-BOM</p>
      </div>
      {/* <section className="refundSection bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="refundHdr flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black">
              Cancellation Refund Policy
            </h3>
            <p className="text-sm text-right darkText">
              <span className="linkText">View Policy</span>
            </p>
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
                <div className="flexOne">
                  <div className="flex">
                    <span className="cancPriceInfo text-lg font-semibold text-green-500 mr-4">
                      ₹ 3,975
                    </span>
                    <span className="cancPriceInfo text-lg font-semibold text-red-500">
                      ₹ 7,267
                    </span>
                  </div>
                  <div className="cancGradline bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-1 rounded-full mt-2 mb-4"></div>
                  <div className="cancTimeline flex justify-between">
                    <div className="cancTimeNode">
                      <p className="text-black">Now</p>
                    </div>
                    <div className="cancTimeNode">
                      <p className="text-black">19 Apr</p>{" "}
                      <p className="text-sm font-semibold">12:45</p>
                    </div>
                    <div className="cancTimeNode">
                      <p className="text-black">19 Apr</p>{" "}
                      <p className="text-sm font-semibold">14:45</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ReviewDetails;
