import React, { useContext } from "react";
import { Marker } from "react-google-maps";
import MapContext from "../MapWrapper/MapContext";

function MapMarker({
  country: {
    latlng: [lat, lng]
  },
  coronaCountry
}) {
  const { setCountry } = useContext(MapContext);
  return (
    <Marker
      key={`${Math.random()}`}
      position={{ lat, lng }}
      onClick={() => {
        setCountry(coronaCountry);
      }}
    />
  );
}

export default MapMarker;
