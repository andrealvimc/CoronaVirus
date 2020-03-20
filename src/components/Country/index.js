import React from "react";

import { Container, Info, Image, ImageWrap } from "./styles";

import CountryImage from "../CountryImage";

function Country({ country }) {
  return (
    <Container>
      <Image>
        <ImageWrap>
          <CountryImage name={country.country} />
        </ImageWrap>
      </Image>
      <Info>
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
      </Info>
    </Container>
  );
}

export default Country;
