import React from "react";
import { Container } from "./styles";
import Spinner from "../Spinner";

function Loading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default Loading;
