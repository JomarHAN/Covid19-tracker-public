import React from "react";
import "./WorldMap.css";
import { GeoJSON } from "react-leaflet";

function WorldMap({ countries }) {
  return <GeoJSON data={countries} />;
}

export default WorldMap;
