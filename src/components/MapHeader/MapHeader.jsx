import React, { useEffect, useState } from "react";
import "./MapHeader.css";
import SwitchUs from "./SwitchUs";
import LoadWorldData from "../../tasks/LoadWorldTasks";
import CardType from "../CardType/CardType";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";
import { selectCasesType, setCasesType } from "../../features/casesTypeSlice";

function MapHeader() {
  const [update, setUpdate] = useState();
  const casesType = useSelector(selectCasesType);
  const casesTypeDispatch = useDispatch();

  const loadWorldData = new LoadWorldData();

  const loadCardData = () => {
    loadWorldData.loadWorldData(setUpdate);
  };

  useEffect(() => {
    loadCardData();
  }, []);

  console.log(update);

  return (
    <div className="mapHeader">
      <div className="mapHeader__titleAndSwitch">
        <h1>COVID-19 TRACKER</h1>
        <SwitchUs />
      </div>
      <div className="mapHeader__cardsGroup">
        <CardType
          active={casesType === "cases"}
          onClick={() => casesTypeDispatch(setCasesType("cases"))}
          title="Cases"
          cases={numeral(update?.todayCases).format("0.0a")}
          casesTotal={numeral(update?.cases).format("0.0a")}
        />
        <CardType
          active={casesType === "recovered"}
          onClick={() => casesTypeDispatch(setCasesType("recovered"))}
          title="Recovered"
          cases={numeral(update?.todayRecovered).format("0.0a")}
          casesTotal={numeral(update?.recovered).format("0.0a")}
        />
        <CardType
          active={casesType === "deaths"}
          onClick={() => casesTypeDispatch(setCasesType("deaths"))}
          title="Deaths"
          cases={numeral(update?.todayDeaths).format("0.0a")}
          casesTotal={numeral(update?.deaths).format("0.0a")}
        />
      </div>
    </div>
  );
}

export default MapHeader;
