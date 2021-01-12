import React, { useEffect, useState } from "react";
import "./Legend.css";
import { legendItems } from "../../entities/LegendItems";
import { useSelector } from "react-redux";
import { selectCasesType } from "../../features/casesTypeSlice";
function Legend() {
  const casesType = useSelector(selectCasesType);
  const [legends, setLegends] = useState();

  const changeLegend = () => {
    const color = legendItems.find((color) => color.type === casesType);
    setLegends(color.legends);
  };

  useEffect(changeLegend, [casesType]);

  return (
    <div className="legends">
      {legends?.map((legend) => (
        <div
          key={legend.title}
          className="legend__child"
          style={{ color: legend.textColor, backgroundColor: legend.color }}
        >
          <span>{legend.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Legend;
