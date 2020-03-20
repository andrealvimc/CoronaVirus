import React, { useEffect, useState } from "react";

import GlobalStyle from "./globalStyle";
import { Container, Board } from "./styles";
import Spinner from "./components/Spinner";
import Country from "./components/Country";
import Map from "./components/Map";

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

  return (
    <>
      <Container>
        <h1>Casos de Coronavírus pelo mundo</h1>
        <Map
          countries={countries}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<Spinner />}
          containerElement={<div style={{ height: `400px`, width: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Board>
          {loading ? (
            <Spinner />
          ) : (
            <ul>
              {countries.map(country => (
                <Country key={country.country} country={country} />
              ))}
            </ul>
          )}
        </Board>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
