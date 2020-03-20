import React, { useState } from "react";
import { Container, MapWrap } from "./styles";
import MapContext from "./MapContext";
import CountryMap from "../CountryMap";

function MapWrapper({ children }) {
  const [country, setCountry] = useState(null);

  return (
    <MapContext.Provider value={{ country, setCountry }}>
      <Container>
        <MapWrap>{children}</MapWrap>
        <CountryMap />
      </Container>
    </MapContext.Provider>
  );
}

export default MapWrapper;
