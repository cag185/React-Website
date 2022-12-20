import React from 'react';
import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { ReactComponent as Logo } from './images/Coffee.svg';
import "./main.css"



function App() {
  return (
    <div>
      <Navbar>
      </Navbar>
      <Section id="About" />
      <Section id="EPortfolio" />
      <Section id="CourseWork" />
      <Section id="Resume" />
      <Section id="Contact" />
    </div>
  );
}

// react render 
// ReactDOM.render(<App />, document.getElementById('root'));

export default App