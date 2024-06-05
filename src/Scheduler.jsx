import React, { useState } from "react";
import Calendar from "./Calendar";
import "./Scheduler.css";

const Scheduler = () => {
  const [availableDays, setAvailableDays] = useState([]);

  const handleDayClick = (day) => {
    setAvailableDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const handleCrossReference = () => {
    // Logic to cross-reference availabilities with other users
    // This could involve fetching data from a server or other state management
    console.log("Cross-referencing with other users...");
  };

  return (
    <div className="scheduler-page">
      <h1>Select Your Available Days for Meetings</h1>
      <Calendar availableDays={availableDays} onDayClick={handleDayClick} />
      <button onClick={handleCrossReference} className="cross-reference-button">
        Cross-Reference Availabilities
      </button>
    </div>
  );
};

export default Scheduler;
