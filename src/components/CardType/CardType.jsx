import React from "react";
import "./CardType.css";

function CardType({ title, cases, casesTotal, active, ...props }) {
  return (
    <div
      className={`cardType ${active && "cardType--selected"}`}
      onClick={props.onClick}
    >
      <h3>{title}</h3>
      <p>
        <strong
          className={
            (title === "Recovered" && "cardType-green") ||
            (title === "Deaths" && "cardType-purple")
          }
        >
          +{cases} Today
        </strong>
      </p>
      <small>
        <strong>{casesTotal}</strong> Total
      </small>
    </div>
  );
}

export default CardType;
