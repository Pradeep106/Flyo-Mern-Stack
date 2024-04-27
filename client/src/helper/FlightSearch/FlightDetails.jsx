import React from "react";
import TravelerDetail from "../../components/TravellerDetails";

const FlightDetails = ({ item }) => {
  // Remove curly braces from dateString
  const dateString = item.flightTakeoffDate;
  const date = new Date(dateString);

  // Define an array of month abbreviations
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Define an array of day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the day, month abbreviation, and year
  const day = dayNames[date.getDay()];
  const month = monthAbbreviations[date.getMonth()];
  const year = date.getFullYear().toString().substr(-2); // Get the last two digits of the year

  // Format the date as "day, month day month year"
  const formattedDate = `${date.getDate()} ${month}`;
  const formattedDate2 = `${day}, ${date.getDate()} ${month} ${year}`;
  console.log(formattedDate); // Output: "Tue, 4 Jun 24"

  return (
    <section className="border border-gray-800 p-3 text-sm  rounded-sm">
      <div className="border-b border-gray-800 pb-2">
        <p className="font-semibold text-sm">
          {item.fromAirport.city} to {item.toAirport.city}, {formattedDate}
        </p>
      </div>
      <p className="mt-2">
        {" "}
        <span className="font-bold">{item.airlineName}</span> {item.airlineModel}
      </p>
      <div className="flex justify-between my-5">
        <div>
          <p className="text-lg font-bold">02:23</p>
          <p className="block text-[12px] font-medium text-gray-700">
            {formattedDate2}
          </p>
          <p className=" text-[13px] ">{item.fromAirport.city},India</p>
        </div>
        <div>
          <p className=" text-[13px] ">{item.duration}</p>
          <div className="w-full h-0.5 bg-blue-500"></div>
        </div>

        <div>
          <p className="text-lg font-bold">02:23</p>
          <p className="block text-[12px] font-medium text-gray-700">
            {formattedDate2}
          </p>
          <p className=" text-[13px] ">{item.toAirport.city},India</p>
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
