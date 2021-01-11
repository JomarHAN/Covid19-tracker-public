import React from "react";
import CovidMap from "./components/CovidMap/CovidMap";
import TableInfo from "./components/TableInfo/TableInfo";
import "./Covid19Tracker.css";

function Covid19Tracker() {
  return (
    <div className="covidTracker">
      <CovidMap />
      <TableInfo />
    </div>
  );
}

export default Covid19Tracker;
