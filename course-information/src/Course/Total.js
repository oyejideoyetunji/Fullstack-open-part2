import React from "react";

const Total = ({ parts }) => {
  return (
    <section>
      <p>
        <strong>
          Total Number of exercises :{" "}
          {parts.reduce((total, part) => {
            return total + part.exercises;
          }, 0)}
        </strong>
      </p>
    </section>
  );
};

export default Total;
