import React from "react";

const SearchBlock = ({ searchVal, setSearchVal }) => {
  const handleInputChange = (event) => {
    setSearchVal(event.target.value);
  };

  return (
    <section>
      <label>Search for a country</label>
      <input type="text" value={searchVal} onChange={handleInputChange} />
    </section>
  );
};

export default SearchBlock;
