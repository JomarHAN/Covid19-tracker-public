import React from "react";
import numeral from "numeral";
import "./TableList.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUsa } from "../../features/usaSlice";
import { setCountryCovid, setWorldView } from "../../features/countriesSlice";

function TableList({ listRegion }) {
  const dispatch = useDispatch();
  const isUsa = useSelector(selectIsUsa);

  return (
    <div className="tableList">
      <table>
        <tr>
          <th>#</th>
          <th>Region</th>
          <th>Cases</th>
        </tr>
        {listRegion.map((region, index) => (
          <tr
            key={index}
            className="tableList__eachone"
            onClick={() => {
              !isUsa &&
                dispatch(
                  setWorldView({
                    worldLatLng: [
                      region.countryInfo.lat,
                      region.countryInfo.long,
                    ],
                    worldZoom: 4,
                  })
                );
              dispatch(setCountryCovid({ countryCovid: region.country }));
            }}
          >
            <td>{index + 1}</td>
            <td>{isUsa ? region.state : region.country}</td>
            <td>{numeral(region.cases).format("0,0")}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TableList;
