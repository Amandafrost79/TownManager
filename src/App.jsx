import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import Scheduler from "./Scheduler";
import TimeSheets from "./TimeSheets";
import StaffSchedule from "./StaffSchedule";
import WorkChat from "./WorkChat";
import Reminders from "./Reminders";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/TownManager" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/timesheets" element={<TimeSheets />} />
        <Route path="/staffschedule" element={<StaffSchedule />} />
        <Route path="/workchat" element={<WorkChat />} />
        <Route path="/reminders" element={<Reminders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
