import React from "react";

const CountryDetails = ({ countries }) => {
  if (countries === null || countries.length < 1) return null;
  const { name, capital, region, flag, languages } = countries[0];
  return (
    <section>
      <p>Country Name : {name}</p>
      <p>Capital : {capital}</p>
      <p> Region : {region}</p>
      <ul>
        <h3> Languages: </h3>
        {languages.map((lang) => {
          return <li key={lang}>{lang}</li>;
        })}
      </ul>
      <img alt="country flag" src={flag} />
    </section>
  );
};

export default CountryDetails;
