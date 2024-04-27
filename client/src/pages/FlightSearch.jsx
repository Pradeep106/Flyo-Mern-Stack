import React from "react";
import FlightBookingCard from "../components/FlightBookingCard";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { demoData } from "../constant/DemoData";
const FlightSearch = () => {
  const formData = useSelector((state) => state.flightData?.value);
  const filteredData = demoData.filter((data) => {
    return (
      data.fromAirport.city === formData.fromAirport && // Replace "Delhi" with the desired fromAirport city
      data.toAirport.city === formData.toAirport && // Replace "Mumbai" with the desired toAirport city
      data.flightTakeoffDate === formData.booking_date // Replace "2024-04-21" with the desired flightTakeoffDate
    );
  });

  

  return (
    <div className="flex h-fit  gradient-custom  pt-20 p-10 gap-5 min-h-screen">
      {/* <Sidebar /> */}
      <FlightBookingCard filteredData={filteredData} />
    </div>
  );
};

export default FlightSearch;
