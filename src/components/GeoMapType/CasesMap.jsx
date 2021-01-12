import React from "react";
import { GeoJSON } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUsa } from "../../features/usaSlice";
import numeral from "numeral";
import { setCountryCovid, setWorldView } from "../../features/countriesSlice";

function CasesMap({ region, setHover }) {
  const isUsa = useSelector(selectIsUsa);
  const countryDispatch = useDispatch();

  const mapStyle = {
    fillColor: "white",
    fillOpacity: 1,
    color: "black",
    weight: 1,
    dashArray: null,
  };

  const onEachCountry = (country, layer) => {
    if (!isUsa) {
      const countryInfo = country.properties;
      const countryFlag = countryInfo.countryInfo?.flag;

      layer.bindPopup(`
        <img src=${countryFlag} alt=""/>
        <h1>${countryInfo.country}</h1>
        <p>Cases: <strong>${numeral(countryInfo.cases).format(
          "0,0"
        )}</strong></p>
        <p>Recovered: <strong>${numeral(countryInfo.recovered).format(
          "0,0"
        )}</strong></p>
          <p>Deaths: <strong>${numeral(countryInfo.deaths).format(
            "0,0"
          )}</strong></p>
            `);
    }
    layer.setStyle({ fillColor: country.properties.colorCases });
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  const highlightFeature = (e) => {
    const layer = e.target;
    const regionDetail = layer.feature.properties;
    e.target.setStyle({
      weight: 3,
      color: "green",
      dashArray: "",
      fillOpacity: 1,
    });

    if (isUsa) {
      setHover({
        regionName: regionDetail.state,
        regionCases: regionDetail.cases,
        regionDeaths: regionDetail.deaths,
        regionRecovered: regionDetail.recovered,
      });
    } else {
      setHover(layer.feature.properties.country);
    }
  };

  const resetHighlight = (e) => {
    e.target.setStyle({
      fillColor: `${e.target.feature.properties.colorCases}`,
      fillOpacity: 1,
      color: "black",
      dashArray: "",
      weight: 1,
    });
    if (isUsa) {
      setHover({ regionName: "USA" });
    } else {
      setHover("Worldwide");
    }
  };

  const clickEvenCountry = ({ layer }) => {
    const countryProperties = layer.feature.properties;
    if (!isUsa) {
      if (countryProperties) {
        countryDispatch(
          setWorldView({
            worldLatLng: [
              countryProperties.countryInfo.lat,
              countryProperties.countryInfo.long,
            ],
            worldZoom: 4,
          })
        );

        countryDispatch(
          setCountryCovid({
            countryCovid: countryProperties.country,
          })
        );
      }
    }
  };

  return (
    <GeoJSON
      data={region}
      style={mapStyle}
      onEachFeature={onEachCountry}
      eventHandlers={{ click: clickEvenCountry }}
    />
  );
}

export default CasesMap;
