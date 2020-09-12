import React from "react";

import Country from "./Country";

const CountryDetails = ({ countriesToShow }) => {
  if (countriesToShow === undefined) {
    return <em>Please supply a seacrh input</em>;
  } else if (countriesToShow === null) {
    return <em>Too many matchs, Please supply a more specific input</em>;
  } else if (countriesToShow.length < 1) {
    return <em>No match found for your seacrh</em>;
  } else {
    return countriesToShow.map((country) => (
      <Country key={country.name} country={country} />
    ));
  }
};

export default CountryDetails;
