// Suggestions.js
import React from "react";

const Suggestions = ({ filteredData, handleSuggestionClick }) => {
  return (
    <div className="absolute bg-gray-100 w-full">
      {filteredData.map((data) => (
        <div
          key={data.city}
          onClick={() => handleSuggestionClick(data.city)}
          className="cursor-pointer hover:bg-gray-200 p-2">
          {data.city}
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
