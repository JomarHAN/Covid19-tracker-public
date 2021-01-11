import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsUsa } from "../../features/usaSlice";
import Loading from "../Loading/Loading";
import MapHeader from "../MapHeader/MapHeader";
import UsMap from "../UsMap/UsMap";
import WorldMap from "../WorldMap/WorldMap";
import "./CovidMap.css";

function CovidMap() {
  const [countries, setCountries] = useState([]);
  const isUsa = useSelector(selectIsUsa);
  return (
    <div className="covidMap">
      <MapHeader />
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <>{!isUsa ? <WorldMap /> : <UsMap />}</>
      )}
    </div>
  );
}

export default CovidMap;
