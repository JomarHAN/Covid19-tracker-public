import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import { useSelector } from "react-redux";
import {
  selectWorldLatLng,
  selectWorldZoom,
} from "../../features/countriesSlice";
import {
  selectIsUsa,
  selectUsCenter,
  selectUsZoom,
} from "../../features/usaSlice";
import Loading from "../Loading/Loading";
import MapHeader from "../MapHeader/MapHeader";
import UsMap from "../UsMap/UsMap";
import WorldMap from "../WorldMap/WorldMap";
import "./CovidMap.css";
import LoadWorldTasks from "../../tasks/LoadWorldTasks";
import "leaflet/dist/leaflet.css";
import Legend from "../Legend/Legend";
import LoadUsTasks from "../../tasks/LoadUsTasks";

function CovidMap() {
  const [countries, setCountries] = useState([]);
  const [usStates, setUsStates] = useState([]);
  const isUsa = useSelector(selectIsUsa);
  const worldLatLng = useSelector(selectWorldLatLng);
  const worldZoom = useSelector(selectWorldZoom);
  const usCenter = useSelector(selectUsCenter);
  const usZoom = useSelector(selectUsZoom);

  const loadWorldTasks = new LoadWorldTasks();
  const loadUsTasks = new LoadUsTasks();

  const usMap = () => {
    loadUsTasks.loadUsMap(setUsStates);
  };

  const worldMap = () => {
    loadWorldTasks.load(setCountries);
  };

  useEffect(() => {
    if (!isUsa) {
      worldMap();
    } else {
      usMap();
    }
  }, [isUsa]);

  return (
    <div className="covidMap">
      <MapHeader />
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div className="covidMap__content">
          {!isUsa ? (
            <WorldMap
              worldLatLng={worldLatLng}
              worldZoom={worldZoom}
              countries={countries}
            />
          ) : (
            <UsMap center={usCenter} zoom={usZoom} usStates={usStates} />
          )}
        </div>
      )}
      <Legend />
    </div>
  );
}

export default CovidMap;
