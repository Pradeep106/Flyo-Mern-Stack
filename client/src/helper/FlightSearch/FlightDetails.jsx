import React from "react";

const FlightDetails = () => {
  return (
    <section className="border border-gray-300 p-2   rounded-md">
      <div className="border-b border-gray-300 pb-2">
        <p className="font-semibold text-sm">New Delhi to Mumbai ,4 June</p>
      </div>
      <p className="mt-2"> <span className="font-bold">Airline</span> 123455</p>
      <div className="flex justify-between my-5">
        <div>
          <p className="text-lg font-bold">02:23</p>
          <p className="block text-[12px] font-medium text-gray-700">
            Tue,4 Jun 24
          </p>
          <p className=" text-[13px] ">New Delhi,India</p>
        </div>
        <div>
        <p className=" text-[13px] ">06h 05m</p>
        <div className="w-full h-0.5 bg-blue-500"></div>
        </div>
       
        <div>
          <p className="text-lg font-bold">02:23</p>
          <p className="block text-[12px] font-medium text-gray-700">
            Tue,4 Jun 24
          </p>
          <p className=" text-[13px] ">New Delhi,India</p>
        </div>
        <div>
          <p className="font-bold text-[13px] uppercase">Baggage</p>
          <p className="text-[13px]">Adult</p>
        </div>
        <div>
          <p className="font-bold text-sm uppercase">Chek in</p>
          <p className="text-[13px]">15 kg</p>
        </div>
        <div>
          <p className="font-bold uppercase text-sm">cabin</p>
          <p className="text-[13px]">7kg</p>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
