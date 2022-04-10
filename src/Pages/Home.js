import React from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import TimelineNavbar from "../Components/TImelineNavbar/TImelineNavbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TimelineNavbar />
    </div>
  );
};

export default Home;
