import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ availableDays, onDayClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyCells = Array.from({ length: firstDayOfMonth });

    return [...emptyCells, ...daysArray].map((day, index) => {
      if (typeof day === "number") {
        return (
          <div
            key={index}
            className={`day ${availableDays.includes(day) ? "available" : ""}`}
            onClick={() => onDayClick(day)}
          >
            {day}
          </div>
        );
      } else {
        return <div key={index} className="day empty"></div>;
      }
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <div>
          {monthNames[currentMonth]} {currentYear}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days-of-week">
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>
      </div>
      <div className="days-grid">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
