import React from "react";
import Course from "./Course/Course";

import courses from "./courses";

const App = () => {
  return (
    <main>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </main>
  );
};

export default App;
