import React from "react";
import { Divider } from "@material-ui/core";
export default function CourseWork() {
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
              <p> Some info about the class</p>
              <button className="Submit-Button">expand</button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Advanced Digital Design</h3>
            </div>
            <div className="class-bio">
              <p> Some info about the class</p>
              <button className="Submit-Button">expand</button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Computer Networks</h3>
            </div>
            <div className="class-bio">
              <p> Some info about the class</p>
              <button className="Submit-Button">expand</button>
            </div>
          </div>
          <div className="Class-bio-pair">
            <div className="class-name">
              <h3>Modern Physics</h3>
            </div>
            <div className="class-bio">
              <p> Some info about the class</p>
              <button className="Submit-Button">expand</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
