import React from "react";
import "./Calendar.css";

const Calendar = ({ availableDays, onDayClick }) => {
  const daysInMonth = new Date().getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar">
      {daysArray.map((day) => (
        <div
          key={day}
          className={`day ${availableDays.includes(day) ? "available" : ""}`}
          onClick={() => onDayClick(day)}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
