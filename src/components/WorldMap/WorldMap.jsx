import { IconButton } from "@material-ui/core";
import { Explore } from "@material-ui/icons";
import React, { useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountryCovid,
  selectWorldLatLng,
  selectWorldZoom,
  setCountryCovid,
  setWorldView,
} from "../../features/countriesSlice";
import CasesMap from "../GeoMapType/CasesMap";
import "./WorldMap.css";
import L from "leaflet";
import markerSign from "./390px-Map_marker.svg.png";

function WorldMap({ countries }) {
  const [hover, setHover] = useState("Worldwide");
  const worldLatLng = useSelector(selectWorldLatLng);
  const worldZoom = useSelector(selectWorldZoom);
  const countryDispatch = useDispatch();
  const countryCovid = useSelector(selectCountryCovid);

  const FlyTo = () => {
    const map = useMap();
    map.flyTo(worldLatLng, worldZoom);
    return null;
  };

  const iconPerson = new L.Icon({
    iconUrl: markerSign,
    iconRetinaUrl: markerSign,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 35),
    className: "leaflet-div-icon",
  });

  const backClick = () => {
    countryDispatch(setCountryCovid({ countryCovid: "Worldwide" }));
    countryDispatch(setWorldView({ isGlobal: true }));
  };

  return (
    <div className="worldMap">
      <FlyTo />
      <CasesMap region={countries} setHover={setHover} />

      {countryCovid !== "Worldwide" && (
        <Marker position={worldLatLng} icon={iconPerson} />
      )}

      <IconButton className="worldMap__global" onClick={backClick}>
        <Explore />
      </IconButton>
    </div>
  );
}

export default WorldMap;
