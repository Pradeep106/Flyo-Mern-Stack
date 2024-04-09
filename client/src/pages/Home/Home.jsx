// import React from "react";
import Body from "../../components/Home/Body";
import Card from "../../components/Home/Card";
import Explore from "../../components/Home/Explore";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
// import bgimage from "../../assets/bgimg.jpg";

const Home = () => {
  return (
    <div className=" bg-blue text- bg-gradient-to-t from-gredientLight to-gredientDark  h-screen">
      <Header />
      <div className="mt-[5%]">
        <Body />
      </div>
      <div className="bg-[#fdfdfd] px-5 py-2   mt-10">
        <Explore />
      </div>
      <Card/>
      <Footer/>
    </div>
  );
};

export default Home;
