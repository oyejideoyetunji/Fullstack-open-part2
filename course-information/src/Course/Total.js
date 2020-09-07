import React from "react";

const Total = ({ parts }) => {
  return (
    <section>
      <p>
        Number of exercises :{" "}
        {parts.reduce((total, part) => {
          return total + part.exercises;
        }, 0)}
      </p>
    </section>
  );
};

export default Total;
