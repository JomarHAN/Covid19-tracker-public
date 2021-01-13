import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import { useSelector } from "react-redux";
import { selectCasesType } from "../../features/casesTypeSlice";
import { selectUsCenter, selectUsZoom } from "../../features/usaSlice";
import CasesMap from "../GeoMapType/CasesMap";
import DeathsMap from "../GeoMapType/DeathsMap";
import RecoveredMap from "../GeoMapType/RecoveredMap";
import "./UsMap.css";
import numeral from "numeral";

function UsMap({ usStates }) {
  const casesType = useSelector(selectCasesType);
  const usCenter = useSelector(selectUsCenter);
  const usZoom = useSelector(selectUsZoom);
  const [regionHover, setRegionHover] = useState({
    regionName: "USA",
    regionCases: null,
    regionDeaths: null,
    regionRecovered: null,
  });

  return (
    <MapContainer style={{ height: "100%" }} center={usCenter} zoom={usZoom}>
      {usStates?.map((usState) => {
        if (casesType === "cases") {
          return <CasesMap region={usState} setHover={setRegionHover} />;
        } else if (casesType === "deaths") {
          return <DeathsMap region={usState} setHover={setRegionHover} />;
        } else {
          return <RecoveredMap region={usState} setHover={setRegionHover} />;
        }
      })}
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
        {regionHover.regionName === "USA" ? (
          <h4>
            Scope on: <strong>{regionHover.regionName}</strong>
          </h4>
        ) : (
          <>
            <h4>
              Scope on: <strong>{regionHover.regionName}</strong>
            </h4>
            <p>
              Cases:{" "}
              <strong>{numeral(regionHover.regionCases).format("0,0")}</strong>
            </p>
            <p>
              Deaths:{" "}
              <strong>{numeral(regionHover.regionDeaths).format("0,0")}</strong>
            </p>
            <p>
              Recovered:{" "}
              <strong>
                {numeral(regionHover.regionRecovered).format("0,0")}
              </strong>
            </p>
          </>
        )}
      </div>
    </MapContainer>
  );
}

export default UsMap;
