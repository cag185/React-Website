import React from "react";
import WordlePic from "../images/Worlde-Start.png";
import MazePic from "../images/AStarSearch_Maze.png";
import ConvBefore from "../images/Rock Image.png";
import ConvAfter from "../images/output_accel.jpg";

export default function Eport() {
  return (
    <div id="EPortfolio" className="InfoSection">
      <h1>
        Here's some of my
        <span className="Projects">Projects</span>
      </h1>
      <div className="Gallery">
        <div className="Col1">
          <h2>Command Line Wordle Solver</h2>
          <img className="E-Img" src={WordlePic} alt="project 1"></img>
          <p>A short description about the project that can be expanded</p>
          <button className="Submit-Button">Learn More</button>
        </div>
        <div className="Col2">
          <h2>A-Star Algorithm Maze Searcher</h2>
          <img className="E-Img" src={MazePic} alt="project 1"></img>
          <p>A short description about the project that can be expanded</p>
          <button className="Submit-Button">Learn More</button>
        </div>
        <div className="Col3">
          <h2>Accelerated FPGA Image Convolution</h2>
          <img className="E-Img" src={ConvAfter} alt="project 1"></img>
          <p>A short description about the project that can be expanded</p>
          <button className="Submit-Button">Learn More</button>
        </div>
      </div>
    </div>
  );
}
