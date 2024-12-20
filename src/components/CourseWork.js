import React, { useState } from "react";
export default function CourseWork() {
  //expand buttons for the courswork section
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);

  const [btn1State, setBtn1] = useState("expand");
  const [btn2State, setBtn2] = useState("expand");
  const [btn3State, setBtn3] = useState("expand");
  const [btn4State, setBtn4] = useState("expand");

  const changeBtn1 = () => {
    expand1 === false ? setBtn1("collapse") : setBtn1("expand");
  };
  const changeBtn2 = () => {
    expand2 === false ? setBtn2("collapse") : setBtn2("expand");
  };
  const changeBtn3 = () => {
    expand3 === false ? setBtn3("collapse") : setBtn3("expand");
  };
  const changeBtn4 = () => {
    expand4 === false ? setBtn4("collapse") : setBtn4("expand");
  };

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
                  changeBtn1();
                }}
                className="Submit-Button"
              >
                {btn1State}
              </button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Advanced Digital Design</h3>
            </div>
            <div className="class-bio">
              {expand2 === true && (
                <p>
                  In this class, I learned how to create VHDL descriptions for
                  hardware based solutions to various problems given by the
                  instructor. We used the Viviado enviornment to create
                  descriptions of things like Memory Units, ALU's, CPUs, and
                  Finite State Machines.
                  <br></br>
                  <br></br>
                  One intense project that took over a month to complete was a
                  32-bit MIPS CPU in VHDL. We used existing components from
                  prior labs (Arithmatic Logic Units, Memory Units, Shift
                  registers) and combined them with a Finite State Machine and
                  complex datapath to allow the computer to do all sorts of
                  calcualtions, including 32-bit multiplication.
                </p>
              )}
              {expand2 === false && (
                <p>
                  {" "}
                  In this class, I learned how to create VHDL descriptions for
                  hardware based on various problems given by the instructor.
                </p>
              )}

              <button
                onClick={() => {
                  setExpand2(!expand2);
                  changeBtn2();
                }}
                className="Submit-Button"
              >
                {btn2State}
              </button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Computer Networks</h3>
            </div>
            <div className="class-bio">
              {expand3 === false && (
                <p>
                  {" "}
                  In this class, I learned about the makeup of networks on a
                  small and large scale and explored the IP stack.
                </p>
              )}
              {expand3 === true && (
                <p>
                  {" "}
                  In this class, I learned about the makeup of networks on a
                  small and large scale and explored the IP stack. We went into
                  detail about the Physical, Data-Link, Network, Transport, and
                  Application layers of the stack, doing HW assignments for each
                  and being quizzed on the material. <br></br>
                  <br></br>
                  An important hands-on exercise we often did when learning a
                  new chapter was to use Matlab with Simulink to simulate things
                  like M/1/1 Queues where we could see the service rate of
                  packets and arrival rates and how that can affect throughput
                  for something like a server.
                </p>
              )}

              <button
                onClick={() => {
                  setExpand3(!expand3);
                  changeBtn3();
                }}
                className="Submit-Button"
              >
                {btn3State}
              </button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Modern Physics</h3>
            </div>
            <div className="class-bio">
              {expand4 === false && (
                <p>
                  {" "}
                  I learned about quantum physics, special relativity, and some
                  atomic physics in this class, with the primary focus being on
                  modern physics.
                </p>
              )}
              {expand4 === true && (
                <p>
                  {" "}
                  I learned about quantum physics, special relativity, and some
                  atomic physics in this class, with the primary focus being on
                  modern physics. Every week we had homework assignments to
                  reinforce the knowledge we accumulated and often had quizzes
                  to test what we had learned. <br></br>
                  <br></br>
                  Physics has always been a great interest of mine, and more
                  than just the level required for engineers to understand basic
                  electronic phenomena. I have always been really interested in
                  space and physics, and this class has taught me a lot about
                  it, including a large unit on how quantum mechanics work. This
                  was particularly cool because there is a lot of crossover
                  between computer engineering and physics in the field of
                  Quantum Computing.
                </p>
              )}

              <button
                onClick={() => {
                  setExpand4(!expand4);
                  changeBtn4();
                }}
                className="Submit-Button"
              >
                {btn4State}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
