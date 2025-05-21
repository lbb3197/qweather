"use client";

import Navbar from "../../ui/navbar";
import SuggestionCard from "../../ui/Card/suggestionCard";

const Suggestion = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <SuggestionCard />
      </div>
    </div>
  );
};

export default Suggestion;
