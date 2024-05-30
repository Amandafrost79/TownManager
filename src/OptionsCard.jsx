import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaComments,
  FaBell,
} from "react-icons/fa";
import "./OptionsCard.css";

const OptionsCard = () => {
  return (
    <div className="options-card">
      <ul className="options-list">
        <li>
          <FaCalendarAlt /> <Link to="/scheduler">Meeting Scheduler</Link>
        </li>
        <li>
          <FaClock /> <Link to="/timesheets">Time Sheets</Link>
        </li>
        <li>
          <FaUsers /> <Link to="staffschedule">Staff Schedule</Link>
        </li>
        <li>
          <FaComments /> <Link to="workchat">Work Chat</Link>
        </li>
        <li>
          <FaBell /> <Link to="/reminders">Reminders</Link>
        </li>
      </ul>
    </div>
  );
};

export default OptionsCard;
