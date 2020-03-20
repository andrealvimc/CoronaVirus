import React from "react";

import { Container, Circle, Svg } from "./styles";

function Spinner() {
  return (
    <Container>
      <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="50" cy="50" r="45" />
      </Svg>
    </Container>
  );
}

export default Spinner;
