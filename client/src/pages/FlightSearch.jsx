import React from "react";
import FlightBookingCard from "../components/FlightBookingCard";
import Sidebar from "../components/Sidebar";

const FlightSearch = () => {
  return (
    <div className="flex gradient-custom  pt-20 p-10 gap-5 h-screen">
      <Sidebar />
      <FlightBookingCard />
    </div>
  );
};

export default FlightSearch;
