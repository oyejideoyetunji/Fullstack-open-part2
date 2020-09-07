import React from "react";

const Part = ({ part }) => {
  let { name, exercises } = part;
  return (
    <>
      <p>Course Name : {name}</p>
      <p>Exercises : {exercises}</p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <section>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </section>
  );
};

export default Content;
