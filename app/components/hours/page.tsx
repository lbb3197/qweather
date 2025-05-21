"use client";

import Navbar from "../../ui/navbar";
import HoursCard from "../../ui/Card/hoursCard";

const Hours = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <HoursCard />
      </div>
    </div>
  );
};

export default Hours;
