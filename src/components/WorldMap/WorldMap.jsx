import { IconButton } from "@material-ui/core";
import { Explore } from "@material-ui/icons";
import React, { useState } from "react";
import { MapContainer, Marker, useMap } from "react-leaflet";
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
import { selectCasesType } from "../../features/casesTypeSlice";
import RecoveredMap from "../GeoMapType/RecoveredMap";
import DeathsMap from "../GeoMapType/DeathsMap";

function WorldMap({ countries }) {
  const [hover, setHover] = useState("Worldwide");
  const worldLatLng = useSelector(selectWorldLatLng);
  const worldZoom = useSelector(selectWorldZoom);
  const countryDispatch = useDispatch();
  const casesType = useSelector(selectCasesType);
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
    <MapContainer
      style={{ height: "100%" }}
      center={worldLatLng}
      zoom={worldZoom}
    >
      <FlyTo />
      {countries.map((region) => {
        if (casesType === "cases") {
          return <CasesMap region={region} setHover={setHover} />;
        } else if (casesType === "recovered") {
          return <RecoveredMap region={region} setHover={setHover} />;
        } else {
          return <DeathsMap region={region} setHover={setHover} />;
        }
      })}

      {countryCovid !== "Worldwide" && (
        <Marker position={worldLatLng} icon={iconPerson} />
      )}

      <IconButton className="worldMap__global" onClick={backClick}>
        <Explore />
      </IconButton>
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          border: "1px solid lightgray",
          padding: "5px",
          backgroundColor: "lightgray",
          borderRadius: "5px",
          zIndex: 999,
        }}
      >
        <p>
          Scope on: <strong>{hover}</strong>
        </p>
      </div>
    </MapContainer>
  );
}

export default WorldMap;
