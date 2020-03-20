import React, { useState, useEffect } from "react";

function CountryImage({ name }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    async function loadPhoto() {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const data = await response.json();

      setPhoto(
        data[0] && (
          <img
            src={`https://www.countryflags.io/${data[0].alpha2Code}/flat/64.png`}
            alt="country"
          />
        )
      );
    }
    loadPhoto();
  });

  return photo || null;
}

export default CountryImage;
