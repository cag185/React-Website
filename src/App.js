import React from "react";
import { ReactDOM } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Content from "./components/Content.json";
import About from "./components/About";
import Eport from "./components/Eport";
import CourseWork from "./components/CourseWork";
import Contact from "./components/Contact";
import "./main.css";

// temp
// <Section id="About" section={Content[0].sectionID} blurb={Content[0].blurb} contentText={Content[0].contentText} />
//       <Section id="EPortfolio" section={Content[1].sectionID} blurb={Content[1].blurb} contentText={Content[1].contentText} />
//       <Section id="CourseWork" section={Content[2].sectionID} blurb={Content[2].blurb} contentText={Content[2].contentText}/>
//       <Section id="Resume" />
//       <Section id="Contact" />

// COMMENTED OUT NAVBAR

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <About id="About" Name="Caleb Gibson"></About>
      <Eport id="EPortfolio"></Eport>
      <CourseWork id="CourseWork"></CourseWork>
      <Contact id="Contact"></Contact>
    </div>
  );
}

// react render
// ReactDOM.render(<App />, document.getElementById('root'));

export default App;
