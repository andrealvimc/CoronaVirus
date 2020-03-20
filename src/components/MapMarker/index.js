import React, { useState } from "react";
import { Marker } from "react-google-maps";
import CountryToolTip from "../CountryTooltip";

function MapMarker({ country, coronaCountry }) {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <Marker
      key={`${Math.random()}`}
      position={{ lat: country.latlng[0], lng: country.latlng[1] }}
      onClick={event => {
        setShow(old => !old);
        setX(event.tb.clientX);
        setY(event.tb.clientY);
      }}
    >
      {show && <CountryToolTip x={x} y={y} country={coronaCountry} />}
    </Marker>
  );
}

export default MapMarker;
