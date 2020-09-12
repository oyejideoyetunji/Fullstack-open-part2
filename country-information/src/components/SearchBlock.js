import React, { useState } from "react";

const SearchBlock = ({ filterCountriesToShow }) => {
  let [searchVal, setSearchVal] = useState("");

  const handleInputChange = (event) => {
    setSearchVal(event.target.value);
    filterCountriesToShow(searchVal);
  };

  return (
    <section>
      <label>Search for a country</label>
      <input type="text" value={searchVal} onChange={handleInputChange} />
    </section>
  );
};

export default SearchBlock;
