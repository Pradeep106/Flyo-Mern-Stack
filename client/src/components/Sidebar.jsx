import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = () => {
  const minPrice = 0;
  const maxPrice = 1000;
  const [currentPrice, setCurrentPrice] = useState(500); // Example current price

  const handlePriceChange = (event) => {
    setCurrentPrice(parseInt(event.target.value));
  };

  return (
    <div className="flex w-[35%] flex-wrap text-sm tracking-wide justify-center rounded-sm mt-10 h-fit  bg-[#000B2E]">
      {/* Price Range Slider */}
      <div className="w-full md:w-1/3 p-5">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="priceRange">
          Price Range
        </label>
        <Tooltip title={currentPrice}>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min={minPrice}
          max={maxPrice}
          value={currentPrice}
          onChange={handlePriceChange}
 className="w-full bg-blue-200 rounded-full appearance-none h-3 focus:outline-none"        />
        </Tooltip>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-600">Min: ${minPrice}</span>
          <span className="text-sm text-gray-600">Max: ${maxPrice}</span>
        </div>
      </div>

      {/* Stop Type Checkbox */}
      <div className="w-full md:w-1/3 px-4 mb-4">
        <label className="block text-gray-700 font-bold mb-2">Stop Type</label>
        <div className="">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-gray-700">Non Stop</span>
          </label>
          <label className="inline-flex items-center ml-4 text-gray-700">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2">Stop</span>
          </label>
        </div>
      </div>

      {/* Airlines Checkbox */}
      <div className="w-full md:w-1/3 px-4 mb-4">
        <label className="block text-gray-700 font-bold mb-2">Airlines</label>
        <div>
          <div className="flex text-gray-700 flex-col">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">Airline 1</span>
              <Tooltip title={`$${currentPrice}`}>
                <span className="ml-auto">${currentPrice}</span>
              </Tooltip>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">Airline 2</span>
              <Tooltip title={`$${currentPrice}`}>
                <span className="ml-auto">${currentPrice}</span>
              </Tooltip>
            </label>
            {/* Add more checkboxes for additional airlines */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
