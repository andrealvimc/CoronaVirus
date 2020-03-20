import React, { useEffect, useState, useMemo } from "react";

import GlobalStyle from "./globalStyle";
import { Container, Board } from "./styles";
import Country from "./components/Country";
import Map from "./components/Map";
import MapWrapper from "./components/MapWrapper";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCountries() {
      const response = await fetch(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      const data = await response.json();

      setCountries(data);
      setLoading(false);
    }
    loadCountries();
  }, []);

  const memorizedCountries = useMemo(() => {
    return countries.map(country => (
      <Country key={country.country} country={country} />
    ));
  }, [countries]);

  return (
    <>
      <Container>
        <h1>Casos de Coronavírus pelo mundo</h1>

        <MapWrapper>
          <Map
            countries={countries}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<Loading />}
            containerElement={
              <div style={{ height: `400px`, width: `100%` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MapWrapper>

        <Board>{loading ? <Loading /> : <ul>{memorizedCountries}</ul>}</Board>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
