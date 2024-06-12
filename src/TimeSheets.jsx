import React, { useState } from "react";
import "./Timesheets.css";

const Timesheets = () => {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { date, hours, description };
    setEntries([...entries, newEntry]);
    setDate("");
    setHours("");
    setDescription("");
  };

  return (
    <div className="timesheets-page">
      <h1>Fill Out Your Timesheet</h1>
      <form onSubmit={handleSubmit} className="timesheet-form">
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
          Hours Worked:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </label>
        <label>
          Description of Work:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="entries-list">
        <h2>Submitted Entries</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>Date:</strong> {entry.date}
              <br />
              <strong>Hours Worked:</strong> {entry.hours}
              <br />
              <strong>Description:</strong> {entry.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timesheets;
