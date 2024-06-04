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
      <div className="options-grid">
        <div className="option">
          <Link to="/scheduler">
            <div className="icon-circle calendar-icon">
              <FaCalendarAlt />
            </div>
            <p>Meeting Scheduler</p>
          </Link>
        </div>
        <div className="option">
          <Link to="/timesheets">
            <div className="icon-circle clock-icon">
              <FaClock />
            </div>
            <p>Time Sheets</p>
          </Link>
        </div>
        <div className="option">
          <Link to="/staffschedule">
            <div className="icon-circle users-icon">
              <FaUsers />
            </div>
            <p>Staff Schedule</p>
          </Link>
        </div>
        <div className="option">
          <Link to="/workchat">
            <div className="icon-circle comments-icon">
              <FaComments />
            </div>
            <p>Work Chat</p>
          </Link>
        </div>
        <div className="option">
          <Link to="/reminders">
            <div className="icon-circle bell-icon">
              <FaBell />
            </div>
            <p>Reminders</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
