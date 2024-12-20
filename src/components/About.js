import React from "react";
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
        I'm a full stack web developer based in Pittsburgh. Here's some info
        about me!
      </h2>
      <p>
        I am a 24 year old Full-Stack developer based in Pittsburgh, PA. I have
        a few years of web development under my belt, using frameworks like
        React and Vue, as well as experience in C# for backend development. I
        use SQL, Docker, EF Core, and occasionally Laravel. For the front end, I
        use mostly Vue.js with TailwindCSS for stylizing. I am currently working
        at The Restaurant Store as a dev for many projects, including an
        e-commerce website. My interests are in robotics, web development,
        automation, and embedded systems.
      </p>
    </div>
  );
}
