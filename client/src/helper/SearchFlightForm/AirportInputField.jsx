import React, { useState } from "react";
import { flightData } from "../../constant/FlightData";
// import { demoData } from "../../constant/DemoData";

const AirportInput = ({
  label,
  name,
  register,
  onBlur,
  touchedFields,
  errors,
  setValue,
  demoData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isFieldTouched = !!touchedFields[name];
  const isEmpty = !touchedFields[name] && !errors[name];

  console.log("Flight data ", demoData);

  // Filter airports based on user input
  const uniqueCities = new Set();

  // Filter airports based on user input and unique city names
  const filteredAirports = demoData.filter((airport) => {
    if (airport.fromAirport && airport.fromAirport.city) {
      const cityLowerCase = airport.fromAirport.city.toLowerCase();
      // Check if the city name is unique
      if (!uniqueCities.has(cityLowerCase)) {
        uniqueCities.add(cityLowerCase);
        return cityLowerCase.includes(inputValue.toLowerCase());
      }
    }
    return false;
  });

  console.log("filteredAirports", filteredAirports);

  // Handler for handling click on suggested airport
  const handleAirportClick = (city) => {
    setInputValue(city);
    setValue(name, city);
    setShowSuggestions(false); // Hide suggestion box after clicking
  };

  // Handler for handling input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true); // Show suggestion box when input changes
  };

  return (
    <div className="mb-4  relative w-full">
      <label htmlFor="" className=" text-gray-700">
        {label}
      </label>
      <input
        type="text"
        {...register(name)}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={onBlur}
        placeholder={`Enter ${label}`}
        className="mt-1 block text-gray-500 w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
      {showSuggestions && inputValue && (
        <div className="mt-1 block text-gray-500 absolute w-full bg-[#06133d] shadow-sm shadow-[#07174e] border-[#07174e]   border p-2 rounded-md  focus:border-blue-500 focus:ring focus:ring-blue-200">
          {filteredAirports.map((city, index) => (
            <div
              key={index}
              onClick={() => handleAirportClick(city.fromAirport.city)}>
              <p className="px-3 py-1 hover:text-blue-500 cursor-pointer">
                {city.fromAirport.city}
              </p>
            </div>
          ))}
        </div>
      )}
      {isEmpty ? null : <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default AirportInput;
