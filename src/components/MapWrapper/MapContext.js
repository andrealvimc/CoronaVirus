import { createContext } from "react";

const MapContext = createContext({
  setCountry: value => null,
  country: null
});

export default MapContext;
