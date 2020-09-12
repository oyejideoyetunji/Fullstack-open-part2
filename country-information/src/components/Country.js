import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  let [showDetails, setShowDetails] = useState(false);
  let [fullCountryData, setFullCountryData] = useState(country);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_ACCESS_KEY}&query=${country.capital}`
      )
      .then((resp) => {
        const {
          weather_icons,
          weather_descriptions,
          observation_time,
          temperature,
        } = resp.data.current;
        setFullCountryData({
          ...country,
          weather_icons,
          weather_descriptions,
          observation_time,
          temperature,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [country]);

  const {
    name,
    capital,
    region,
    flag,
    languages,
    population,
    weather_icons,
    weather_descriptions,
    observation_time,
    temperature,
  } = fullCountryData;

  return (
    <section>
      <h1 className="hd-ctr">Country : {name}</h1>
      {showDetails ? (
        <>
          <p>Capital : {capital}</p>
          <p> Region : {region}</p>
          <p>
            Population : <em>{population}</em> people
          </p>
          <ul>
            <h3> Languages: </h3>
            {languages.map((lang) => {
              return <li key={lang}>{lang}</li>;
            })}
          </ul>
          <img alt="country flag" src={flag} />
          <p>Weather Description : {weather_descriptions[0]}</p>
          <img alt="weather icon" src={weather_icons[0]} />
          <p>Temperature : {temperature} (degree celcious)</p>
          <p>As at : {observation_time}</p>
        </>
      ) : null}
      <div>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
      </div>
    </section>
  );
};

export default Country;
