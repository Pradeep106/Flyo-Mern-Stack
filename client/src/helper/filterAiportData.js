import { airportData } from "../constant/Airport";

const filterAirportData = (inputFilter) => {
  return airportData.filter((data) =>
    data.city.toLowerCase().includes(inputFilter.toLowerCase())
  );
};

export default filterAirportData;
