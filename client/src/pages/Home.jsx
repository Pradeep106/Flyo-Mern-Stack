import React, { useEffect } from "react";
import bgImage from "../assets/bg-home.jpg";
import Header from "../components/Header";
import SearchFlightForm from "../components/SearchFlightForm";

import AdminSidebar from "./Admin";
import PaymentForm from "./Payment";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/FlightSearchData/authSlice";

const Home = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUserToken(token));
    }
  }, [dispatch]);


  return (
    <main
      className="bg-cover bg-center  mini:px-5 pt-20 px-14 py-5 mini:h-full sm:h-full h-screen  "
      style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <Header /> */}
      <SearchFlightForm />
      {/* <AirportForm /> */}
      {/* <AdminSidebar /> */}
     
    </main>
  );
};

export default Home;
