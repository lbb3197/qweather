"use client";

import Navbar from "./ui/navbar";
import NowCard from "./ui/Card/nowCard";
import DayCard from "./ui/Card/dayCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <NowCard />
      <DayCard />
    </>
  );
};

export default Home;
