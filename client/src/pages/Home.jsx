import React from "react";
import bgImage from "../assets/bg-home.jpg";
import Header from "../components/Header";
import SearchFlightForm from "../components/SearchFlightForm";

const Home = () => {
  return (
    <main
      className="bg-cover bg-center mini:px-5 px-14 py-5 mini:h-full sm:h-full h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <Header/>
      <SearchFlightForm/>
    </main>
  );
};

export default Home;