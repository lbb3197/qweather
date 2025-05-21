"use client";

import Navbar from "./ui/navbar";
import NowCard from "./ui/Card/nowCard";
import DayCard from "./ui/Card/dayCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <NowCard />
        <DayCard />
      </div>
    </div>
  );
};

export default Home;
