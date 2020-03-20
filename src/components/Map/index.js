import React, { useState, useEffect, memo } from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import MapMarker from "../MapMarker";

function Map({ countries }) {
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    async function loadMapCapitals() {
      setMapCountries(
        await Promise.all(
          countries.map(async country => {
            const response = await fetch(
              `https://restcountries.eu/rest/v2/name/${country.country}`
            );
            const data = await response.json();
            return data[0] || null;
          })
        )
      );
    }
    loadMapCapitals();
  }, [countries]);

  return (
    <GoogleMap defaultZoom={3} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {mapCountries.map(
        country =>
          country && (
            <MapMarker
              key={Math.random()}
              country={country}
              coronaCountry={
                countries.filter(
                  coronaCountry => coronaCountry.country === country.name
                )[0] || {}
              }
            />
          )
      )}
    </GoogleMap>
  );
}

export default memo(withScriptjs(withGoogleMap(Map)));
