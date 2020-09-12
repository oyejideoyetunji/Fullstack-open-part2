import React, { useState } from "react";

const Country = ({ country }) => {
  let [showDetails, setShowDetails] = useState(false);

  const { name, capital, region, flag, languages, population } = country;
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
