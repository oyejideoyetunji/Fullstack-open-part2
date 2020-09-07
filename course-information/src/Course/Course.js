import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <section>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </section>
  );
};

export default Course;
