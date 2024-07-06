import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "ML Practitioner",
          "Data Science Enthusiast",
          "CS Undergrad",
          "Coder",
          "Continuous Learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typing;
