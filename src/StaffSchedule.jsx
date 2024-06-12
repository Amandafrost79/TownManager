import React, { useState } from "react";
import "./StaffSchedule.css";

const StaffSchedule = () => {
  const [daysOff, setDaysOff] = useState([]);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [employees] = useState([
    { id: 1, name: "Ryan", contact: "ryan@example.com" },
    { id: 2, name: "Dillan", contact: "dillan@example.com" },
    // Add more employees as needed
  ]);

  const handleRequestDayOff = (e) => {
    e.preventDefault();
    setDaysOff([...daysOff, { date, reason }]);
    setDate("");
    setReason("");
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyCells = Array.from({ length: firstDayOfMonth });

    return [...emptyCells, ...daysArray].map((day, index) => {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const isDayOff = daysOff.some((d) => d.date === date);
      const employeesOnShift = employees.filter(
        (employee) => Math.random() > 0.5
      ); // Simulate random shifts

      return (
        <div
          key={index}
          className={`day ${isDayOff ? "day-off" : "working-day"}`}
        >
          <div className="day-number">{day}</div>
          <div className="employees">
            {employeesOnShift.map((employee) => (
              <div key={employee.id} className="employee">
                {employee.name}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="staff-schedule-page">
      <h1>Monthly Schedule</h1>
      <div className="calendar">
        <div className="calendar-header">
          <div>
            Month {new Date().getMonth() + 1}, {new Date().getFullYear()}
          </div>
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
      <h2>Request a Day Off</h2>
      <form onSubmit={handleRequestDayOff} className="day-off-form">
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Reason:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Employee Contact Details</h2>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong>: {employee.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffSchedule;
