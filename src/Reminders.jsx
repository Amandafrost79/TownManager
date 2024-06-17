import React, { useState } from "react";
import "./Reminders.css";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddReminder = (e) => {
    e.preventDefault();
    const newReminder = { title, date, description };
    setReminders([...reminders, newReminder]);
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="reminders-page">
      <h1>Reminders</h1>
      <form onSubmit={handleAddReminder} className="reminder-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
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
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Reminder</button>
      </form>
      <div className="reminders-list">
        <h2>Upcoming Reminders</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              <strong>{reminder.title}</strong> - {reminder.date}
              <p>{reminder.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reminders;
