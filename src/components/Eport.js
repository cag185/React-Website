/* eslint-disable no-unreachable */
/* eslint-disable no-template-curly-in-string */
import React from "react";
import WordlePic from "../images/Worlde-Start.png";
import MazePic from "../images/MazeImage.png";
import ConvBefore from "../images/Rock Image.png";
import ConvAfter from "../images/output_accel.jpg";

import { useState } from "react";
import { render } from "@testing-library/react";

export default function Eport() {
  // create a variable to hold the state of the button for the expand part and set it to false
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);

  //function to display the state
  const expandProj1 = () => {
    setExpand1(!expand1);
    const element = document.getElementById("EPortfolio");
    element.scrollIntoView();
  };

  const expandProj2 = () => {
    setExpand2(!expand2);
    const element = document.getElementById("EPortfolio");
    element.scrollIntoView();
  };

  const expandProj3 = () => {
    setExpand3(!expand3);
    const element = document.getElementById("EPortfolio");
    element.scrollIntoView();
  };

  // if all the projects are not expanded
  if (expand1 === false && expand2 === false && expand3 === false) {
    return (
      <div id="EPortfolio" className="InfoSection Projects-class">
        <h1>
          Here's some of my
          <span className="Projects">Projects</span>
        </h1>
        <div className="Gallery">
          <div className="Col1">
            <h2>Command Line Wordle Solver</h2>
            <img className="E-Img" src={WordlePic} alt="project 1"></img>
            <p>
              This command line program helps the user to solve the NYTimes
              Wordle puzzle.
            </p>
            <button className="Submit-Button" onClick={expandProj1}>
              Learn More
            </button>
          </div>
          <div className="Col2">
            <h2>A-Star Algorithm Maze Searcher</h2>
            <img className="E-Img" src={MazePic} alt="project 1"></img>
            <p>
              This C++ program uses the A-Star algorithm to find the nearest
              exit of the maze that is input as an image.
            </p>
            <button className="Submit-Button" onClick={expandProj2}>
              Learn More
            </button>
          </div>
          <div className="Col3">
            <h2>Accelerated FPGA Image Convolution</h2>
            <img className="E-Img" src={ConvAfter} alt="project 1"></img>
            <p>
              This FPGA project uses a hardware implementation solution to image
              convolution, which can be seen in the image.
            </p>
            <button className="Submit-Button" onClick={expandProj3}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  // expand the first project
  if (expand1 === true) {
    return (
      <div id="EPortfolio" className="InfoSection-expanded">
        <div className="Col2">
          <h2>Command Line Wordle Solver</h2>
          <div id="Project-info-div" className="expanded-project">
            <img
              className="E-Img-expanded"
              src={WordlePic}
              alt="project 1"
            ></img>
            <p>
              In this project, I wanted to create a command line program,
              written in python that could assist the user in solving the
              popular Wordle puzzle. There are two options, the user can guess
              their own words, or the program can come up with its own suggested
              word for the player to use. <br />
              <br />
              The program has a dictionary file loaded in, and will choose a
              random word from the dictionary. The user will need to tell the
              program if any of the letters in the suggested word are correct,
              and the index of the correct letters. <br /> <br />
              From there, the program will eleminate words from the dictionary
              which posses the incorrect letters, or that do not have the
              correct letters in the correct index. The program is mostly
              succesful, and typically can solve the wordle puzzle in six
              guesses or less.
              <br></br>
              <br></br>
              One area that I would like to improve on this project in the
              future would be to have the Program do more for the user.
              Currently after every word guessed, the user has to specify every
              letter, if it is in the word or not, and where the index of
              correct letters are. As you can imagine, this can become quite
              tedious. It would be cool to create an API for wordle that the
              program can interact with directly, elimating the need for the
              user to specify what happened when the program guesses a word.
            </p>
          </div>
          <a href="https://github.com/cag185/WordleHelper">Github Link</a>
          <button className="Submit-Button" onClick={expandProj1}>
            Done
          </button>
        </div>
      </div>
    );
  }

  // expand the second project
  if (expand2 === true) {
    return (
      <div id="EPortfolio" className="InfoSection-expanded">
        <div className="Col2">
          <h2>A-Star Algorithm Maze Searcher</h2>
          <div id="Project-info-div" className="expanded-project">
            <img className="E-Img-expanded" src={MazePic} alt="project 2"></img>
            <p>
              This C++ program was an assignment from my Data Structures and
              Algorithms class at the Univeristy of Pittsburgh. I thought this
              project was really cool, as we used VScode in Linux as the
              development enviorment and learned some new stuff for this
              project.
              <br></br> <br></br>
              One of the most important things I learned in this project was c++
              testing using Cmake testing framework. I was able to develop tests
              and make the program assert the cases. This allowed me to quickly
              test for what our professor would be looking for, and look out for
              annoying edge cases that are hard to catch otherwise.
              <br></br>
              <br></br>
              This class also served as my first introduction to Github. My
              professor included starter code for most of the projects that we
              did, and we were able to use it as a template to begin. We could
              download this via pulling from a master github branch that we had
              cloned on our devices.<br></br>
              <br></br>
              As for the actual project, we used input images with a red start
              position and were tasked with implementing a dequeue data
              structure to search the maze using the A* algorithm. The possible
              moves were stored in the dequeue and when the path recursively
              expanded, if it was a dead end, the path would be 'popped' off
              from the data structure. This allowed for a breadth first
              searching technique that could find solutions faster than a depth
              first.
            </p>
          </div>
          <a href="https://github.com/cag185">Github Link</a>
          <button className="Submit-Button" onClick={expandProj2}>
            Done
          </button>
        </div>
      </div>
    );
  }

  // expand the third project
  if (expand3 === true) {
    return (
      <div id="EPortfolio" className="InfoSection-expanded">
        <div className="Col3">
          <h2>Accelerated FPGA Image Convolution</h2>
          <div id="Project-info-div" className="expanded-project">
            <img
              className="E-Img-expanded"
              src={ConvAfter}
              alt="project 3"
            ></img>
            <p>
              In my most recent class, Advanced Digital Design at Pitt, we
              learned a lot about FPGA's and how their hardware can be sued to
              find solutions to problems that can work even faster than software
              solutions. In this particular project, we coded a C++ solution to
              image convolution and two hardware solutions and compared them.
              <br></br> <br></br>
              The two hardware solutions were ring buffer and line buffer data
              structures which we used C++ code to implement. The two different
              implementations where then synthesized at a high level using the
              Viviado enviornment and simulated, so that the transistors in the
              FPGA could be programmed to process the convolution as per
              instructed by the C++ code.
              <br></br>
              <br></br>
              By examining the Utilization reports, we were able to find that
              the ring buffer approach used about half as many clock cycles as
              the line buffer approach, and also the utilixation of the FPGA was
              much lower, showing that it was taxed much less.
              <br></br>
              <br></br>
              This project was really cool to me because we got to actually see
              the results in the form of the image, and learning to use the FPGA
              and the developing enviornment was really satisfying.
            </p>
          </div>
          <a href="https://github.com/cag185">Github Link</a>
          <button className="Submit-Button" onClick={expandProj3}>
            Done
          </button>
        </div>
      </div>
    );
  }
}
