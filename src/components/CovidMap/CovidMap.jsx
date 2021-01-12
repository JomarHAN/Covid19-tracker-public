import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import { useSelector } from "react-redux";
import {
  selectWorldLatLng,
  selectWorldZoom,
} from "../../features/countriesSlice";
import { selectIsUsa } from "../../features/usaSlice";
import Loading from "../Loading/Loading";
import MapHeader from "../MapHeader/MapHeader";
import UsMap from "../UsMap/UsMap";
import WorldMap from "../WorldMap/WorldMap";
import "./CovidMap.css";
import LoadWorldTasks from "../../tasks/LoadWorldTasks";
import "leaflet/dist/leaflet.css";
import Legend from "../Legend/Legend";

function CovidMap() {
  const [countries, setCountries] = useState([]);
  const isUsa = useSelector(selectIsUsa);
  const worldLatLng = useSelector(selectWorldLatLng);
  const worldZoom = useSelector(selectWorldZoom);

  const loadWorldTasks = new LoadWorldTasks();

  const worldMap = () => {
    loadWorldTasks.load(setCountries);
  };

  useEffect(() => {
    worldMap();
  }, []);

  return (
    <div className="covidMap">
      <MapHeader />
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div className="covidMap__content">
          <MapContainer
            style={{ height: "100%" }}
            center={worldLatLng}
            zoom={worldZoom}
          >
            {!isUsa ? <WorldMap countries={countries} /> : <UsMap />}
          </MapContainer>
        </div>
      )}
      <Legend />
    </div>
  );
}

export default CovidMap;
