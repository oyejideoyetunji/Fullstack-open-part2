import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBlock from "./components/SearchBlock";
import CountryDetails from "./components/CountryDetails";

function App() {
  let [countries, setCountries] = useState(null);
  let [countriesToShow, setCountriesToShow] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((resp) => {
      let countriesData = resp.data.map((obj) => {
        return {
          name: obj.name,
          capital: obj.capital,
          population: obj.population,
          region: obj.region,
          flag: obj.flag,
          languages: obj.languages.map((el) => el.name),
        };
      });
      setCountries(countriesData);
    });
  });

  const filterCountriesToShow = (filterVal) => {
    let matchCountries = countries.filter((country) => {
      return country.name.includes(filterVal);
    });
    if (matchCountries.length >= 10) setCountriesToShow(null);
    setCountriesToShow(matchCountries);
  };

  return (
    <main>
      <h1>Get country information on the Go!!</h1>
      <SearchBlock filterCountriesToShow={filterCountriesToShow} />
      <CountryDetails countries={countriesToShow} />
    </main>
  );
}

export default App;
