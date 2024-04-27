import React, { useState, useEffect } from "react";
import axios from "axios";

function GetAirportData() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch all items when the component mounts
    const fetchItems = async () => {
      try {
        const itemsData = await axios.get("http://localhost:8000/api/airports");
        setItems(itemsData.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container  mx-auto ">
      <h1 className="text-3xl font-semibold text-white mb-6">All Airports</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-[#000B2E] text-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Airport Name: {item.name}</h2>
            <p className="text-gray-400 mb-2">Airport Code: {item.code}</p>
            <p className="text-gray-400 mb-2">Airport City: {item.city}</p>
            <p className="text-gray-400 mb-2">Airport Country: {item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAirportData;
