import React from "react";

const FlightAirportTime = ({ airport, time }) => {
  // Check if the time prop is defined before splitting
  if (!time) return null;

  // Split the time string at "T" and select the second part
  const timeString = time.split("T")[1];

  // Split the time string at ":" and select only the hours and minutes
  const timeOnly = timeString.split(":").slice(0, 2).join(":");

  return (
    <div className="text-sm">
      <p className="font-bold text-lg">{timeOnly}</p>
      <p className="block text-[12px] tracking-wider font-medium text-gray-700">
        {airport}
      </p>
    </div>
  );
};

export default FlightAirportTime;
