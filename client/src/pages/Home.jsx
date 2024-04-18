import React from "react";
import bgImage from "../assets/bg-home.jpg";
import Header from "../components/Header";
import SearchFlightForm from "../components/SearchFlightForm";
import FlightSeatBooking from "./FlightSeatBooking";

const Home = () => {
  return (
    <main className="">
      <SearchFlightForm />
      <FlightSeatBooking />
    </main>
  );
};

export default Home;
