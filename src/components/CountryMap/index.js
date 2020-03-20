import React, { useContext } from "react";

import MapContext from "../MapWrapper/MapContext";
import { Container } from "./styles";
import CountryImage from "../CountryImage";

function CountryMap() {
  const { country } = useContext(MapContext);

  return (
    <Container>
      {country ? (
        <>
          <CountryImage name={country.country} />
          <h2>{country.country}</h2>
          <div>
            <div>Casos totais: {country.cases}</div>
            <div>Casos por dia: {country.todayCases}</div>
            <div>Mortes confirmadas: {country.deaths}</div>
            <div>Recuperados: {country.recovered}</div>
            <div>Ativos: {country.active}</div>
            <div>Estado crítico: {country.critical}</div>
            <div>Casos por milhão: {country.casesPerOneMillion}</div>
          </div>
        </>
      ) : (
        <h2>Escolha um país</h2>
      )}
    </Container>
  );
}

export default CountryMap;
