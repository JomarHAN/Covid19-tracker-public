import React from "react";
import { MapContainer } from "react-leaflet";
import { useSelector } from "react-redux";
import { selectCasesType } from "../../features/casesTypeSlice";
import { selectUsCenter, selectUsZoom } from "../../features/usaSlice";
import CasesMap from "../GeoMapType/CasesMap";
import DeathsMap from "../GeoMapType/DeathsMap";
import RecoveredMap from "../GeoMapType/RecoveredMap";
import "./UsMap.css";

function UsMap({ usStates }) {
  const casesType = useSelector(selectCasesType);
  const usCenter = useSelector(selectUsCenter);
  const usZoom = useSelector(selectUsZoom);
  return (
    <MapContainer style={{ height: "100%" }} center={usCenter} zoom={usZoom}>
      {usStates?.map((usState) => {
        if (casesType === "cases") {
          return <CasesMap region={usState} />;
        } else if (casesType === "deaths") {
          return <DeathsMap region={usState} />;
        } else {
          return <RecoveredMap region={usState} />;
        }
      })}
    </MapContainer>
  );
}

export default UsMap;
