import React, { useState } from "react";
import { Divider } from "@material-ui/core";
export default function CourseWork() {
  //expand buttons for the courswork section
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);

  return (
    <div id="CourseWork" className="InfoSection">
      <h1>
        {" "}
        Some
        <span className="Courses"> Courses </span>
        I've taken at Pitt
      </h1>
      <div className="timeline">
        <div className="2022">
          <h2>Fall, 2022</h2>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Embedded Systems Design</h3>
            </div>
            <div className="class-bio">
              {expand1 === true && (
                <p>
                  This class was mostly about how embedded systems are designed,
                  what makes up an embedded system, and labs/hw assignments to
                  practice accessing I/O ports and other crucial parts of an
                  embedded machine.<br></br>
                  <br></br>
                  Some noteable labs that I completed in this class included
                  working with the I/O hardware directly on a Raspberry Pi
                  computer using c to control LEDs, using python to control a
                  Raspberry Pi sense-hat which allowed me to create custom LED
                  aninmations and use gyroscopic controls, and my favorite lab:
                  I was able to create a custom CPU power governor by directly
                  controlling the CPU frequency as needed by the load, using c
                  to automatically detect the load on the Pi and adjust the
                  frequency to the next available value needed.
                </p>
              )}
              {expand1 === false && (
                <p>
                  This class was mostly about how embedded systems are designed,
                  what makes up an embedded system, and labs/hw assignments to
                  practice accessing I/O ports and other crucial parts of an
                  embedded machine.
                </p>
              )}
              <button
                onClick={() => {
                  setExpand1(!expand1);
                }}
                className="Submit-Button"
              >
                expand
              </button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Advanced Digital Design</h3>
            </div>
            <div className="class-bio">
              <p>
                {" "}
                In this class, I learned how to create VHDL descriptions for
                hardware based on various problems given by the instructor.
              </p>
              <button
                onClick={() => {
                  setExpand2(!expand2);
                }}
                className="Submit-Button"
              >
                expand
              </button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Computer Networks</h3>
            </div>
            <div className="class-bio">
              <p>
                {" "}
                In this class, I learned about the makeup of networks on a small
                and large scale and explored the IP stack.
              </p>
              <button
                onClick={() => {
                  setExpand3(!expand3);
                }}
                className="Submit-Button"
              >
                expand
              </button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Modern Physics</h3>
            </div>
            <div className="class-bio">
              <p>
                {" "}
                I learned about quantum physics, special relativity, and some
                atomic physics in this class, with the primary focus being on
                modern physics.
              </p>
              <button
                onClick={() => {
                  setExpand4(!expand4);
                }}
                className="Submit-Button"
              >
                expand
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
