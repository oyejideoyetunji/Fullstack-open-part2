import React from "react";

const PhoneBookFilter = ({ filterValue, setFilterValue }) => {
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <section>
      <label>Filter contacts with: </label>
      <input value={filterValue} onChange={handleFilterChange} />
    </section>
  );
};

export default PhoneBookFilter;
