import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartDataTasks from "../../tasks/CharDataTasks";
import numeral from "numeral";
import { legendItems } from "../../entities/LegendItems";

import Loading from "../Loading/Loading";
import { selectIsUsa } from "../../features/usaSlice";
import { selectCasesType } from "../../features/casesTypeSlice";
import { selectCountryCovid } from "../../features/countriesSlice";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0.0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function TableChart() {
  const casesType = useSelector(selectCasesType);
  let countryCovid = useSelector(selectCountryCovid);
  const [dataChart, setDataChart] = useState();
  const [colorChart, setColorChart] = useState();
  const isUsa = useSelector(selectIsUsa);

  const loadChartData = () => {
    const chartData = new ChartDataTasks();
    if (!isUsa) {
      chartData.loadData(casesType, countryCovid, setDataChart);
    } else {
      chartData.loadData(casesType, (countryCovid = "USA"), setDataChart);
    }
    const color = legendItems.find((color) => color.type === casesType);
    setColorChart(color);
  };

  useEffect(loadChartData, [casesType, countryCovid, isUsa]);

  return (
    <div className="tableChart">
      <div className="tableChart__header">
        <h2>
          {!isUsa ? countryCovid : "USA"}:{" "}
          <small>{casesType.toUpperCase()}</small>
        </h2>
      </div>
      <div className="tableChart__chart">
        {dataChart?.length === 0 ? (
          <Loading />
        ) : (
          <Line
            data={{
              datasets: [
                {
                  fill: false,
                  borderColor: `${colorChart?.legends[1].color}`,
                  data: dataChart,
                },
              ],
            }}
            options={options}
          />
        )}
      </div>
    </div>
  );
}

export default TableChart;
