import React from "react";

const CountryDetails = ({ countriesToShow }) => {
  if (countriesToShow === null || countriesToShow.length < 1) return null;

  return countriesToShow.map((country) => {
    const { name, capital, region, flag, languages } = country;
    return (
      <section key={name}>
        <h1 className="hd-ctr">Country : {name}</h1>
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
  });
};

export default CountryDetails;
