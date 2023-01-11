import React from "react";
import { useRef } from "react";
import Banner from "../images/PaintedMountains.webp";
import Avatar from "../images/Me_3.jpg";

export default function About(props) {
  // const nameRef = useRef();
  return (
    <div id="About" className="InfoSection IntroSection">
      <div className="Avatar-div">
        <span className="Outer-ring">
          <span className="Inner-ring">
            <img className="Avatar-img" src={Avatar} alt="Profile-pic"></img>
          </span>
        </span>
      </div>
      <h1 className="Hi">
        Hi, I'm {}
        <span className="Name">Caleb Gibson!</span>{" "}
      </h1>
      <h2>
        I'm currently a senior at the Univeristy of Pittsburgh. Here's some info
        about me!
      </h2>
      <p>
        I am a 22 year old Computer Engineering student at Pitt. I am also
        getting a minor in Physics and have grown to love Embedded Systems
        Design, Robotics, FPGA Design, and Automation types of projects. I'm
        currently looking for an internship for Summer, 2023 and for full time
        work after I graduate in Decemeber 2023! I am looking for positions in
        Web Development, Automation, General Software Engineering, and Embedded
        System Engineering.
      </p>
    </div>
  );
}
