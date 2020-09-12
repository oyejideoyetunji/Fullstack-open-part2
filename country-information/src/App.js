import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBlock from "./components/SearchBlock";
import CountryDetails from "./components/CountryDetails";

function App() {
  let [countries, setCountries] = useState(null);
  let [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((resp) => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCountriesToShow = () => {
    let formatedFilterVal = searchVal.trim().toLowerCase();
    if (formatedFilterVal === "") return undefined;
    let matchCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(formatedFilterVal);
    });
    if (matchCountries.length > 10) {
      return null;
    } else if (matchCountries.length < 1) {
      return [];
    }
    return matchCountries;
  };

  return (
    <main>
      <h1>Get country information on the Go!!</h1>
      <SearchBlock searchVal={searchVal} setSearchVal={setSearchVal} />
      <CountryDetails countriesToShow={getCountriesToShow()} />
    </main>
  );
}

export default App;
