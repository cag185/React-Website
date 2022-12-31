import React from "react";
import { useRef } from "react";

export default function About(props) {
  // const nameRef = useRef();
  return (
    <div id="About" className="InfoSection IntroSection">
      <h1 className="Hi">
        Hi, I'm {}
        <span className="Name">Caleb Gibson!</span>{" "}
      </h1>
      <h2>
        I'm currently a senior at the Univeristy of Pittsburgh. Here's some info
        about me!
      </h2>
      <p>
        I am a 22 year old Computer Engineering student at Pitt. I am getting a
        minor in Physics and have grown to appreciate Embedded Systems Design,
        Robotics, FPGA Design, and Automation type of projects. I'm currently
        looking for an internship for Summer, 2023 and for full time work after
        I graduate in Decemeber 2023! I am looking for positions in Web
        Development, Automation, General Software Engineering, and Embedded
        System Engineering.
      </p>
    </div>
  );
}
