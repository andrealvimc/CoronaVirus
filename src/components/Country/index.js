import React from "react";

import { Container, Info } from "./styles";

function Country({ country }) {
  return (
    <Container>
      <h2>{country.country}</h2>
      <Info>
        <div>Casos totais: {country.cases}</div>
        <div>Casos por dia: {country.todayCases}</div>
        <div>Mortes confirmadas: {country.deaths}</div>
        <div>Recuperados: {country.recovered}</div>
        <div>Ativos: {country.active}</div>
        <div>Estado crítico: {country.critical}</div>
        <div>Casos por milhão: {country.casesPerOneMillion}</div>
      </Info>
    </Container>
  );
}

export default Country;
