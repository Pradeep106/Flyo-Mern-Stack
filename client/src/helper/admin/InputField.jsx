import React, { useState } from "react";

const AirportInput = ({
  label,
  name,
  register,
  onBlur,
  touchedFields,
  errors,
  setValue,
  demoData
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isFieldTouched = !!touchedFields[name];
  const isEmpty = !touchedFields[name] && !errors[name];

  console.log("Flight data ", demoData);

  // Filter airports based on user input
  const uniqueCities = new Set();

  // Filter airports based on user input and unique city names
  const filteredAirports = demoData.filter((airport) => {});

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
    <div className="mb-4 border relative w-full">
      <label htmlFor="" className="font-bold">
        {label}
      </label>
      <input
        type="text"
        {...register(name)}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={onBlur}
        placeholder={`Enter ${label}`}
        className="border border-gray-300 rounded p-2 w-full"
      />
      {showSuggestions && inputValue && (
        <div className="bg-white z-10 absolute border rounded-b-md w-full">
          {filteredAirports.map((city, index) => (
            <div
              key={index}
              onClick={() => handleAirportClick(city.fromAirport.city)}>
              <p className="px-3 py-1 hover:bg-gray-300 cursor-pointer">
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
