import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Web Developer",
                    "Machine Learning Enthusiast",
                    "CS Undergrad",
                    "Coder",
                    "Deep Learning Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
