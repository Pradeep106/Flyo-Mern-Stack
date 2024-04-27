// TabComponent.js
import React, { useState } from "react";
import FlightDetails from "./FlightDetails";
import FareBreakup from "./FairSummry";
import Cancelation from "./Cancelation";

const TabComponent = ({ item }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full bg-[#000B2E] text-gray-700">
      <div className="flex text-sm tracking-wide  ">
        <button
          className={`px-4 py-2 border border-gray-800   uppercase border-l border-t shadow-md  ${
            activeTab === 1
              ? "bg-blue-500  transition-all duration-75 text-white"
              : "bg-[#000B2E]"
          }`}
          onClick={() => handleTabChange(1)}>
          Flight Details
        </button>
        <button
          className={`px-4 py-2 border border-gray-800  uppercase shadow-md ${
            activeTab === 2
              ? "bg-blue-500 rounded-sm transition-all duration-75 text-white"
              : "bg-[#000B2E]"
          }`}
          onClick={() => handleTabChange(2)}>
          Fair summary
        </button>
        <button
          className={`px-4 py-2 border border-gray-800  uppercase border-b shadow-md ${
            activeTab === 3
              ? "bg-blue-500  transition-all duration-75 text-white"
              : "bg-[#000B2E]"
          }`}
          onClick={() => handleTabChange(3)}>
          Cancelation
        </button>
        <button
          className={`px-4 py-2 border-b border-gray-800  uppercase border-r border-t shadow-md  ${
            activeTab === 4
              ? "bg-blue-500  transition-all duration-75 text-white "
              : "bg-[#000B2E]"
          }`}
          onClick={() => handleTabChange(4)}>
          Date Change
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div>
            <FlightDetails item={item} />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <FareBreakup />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <Cancelation />
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <Cancelation />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
