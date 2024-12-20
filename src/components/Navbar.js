import { useRef } from "react";
import "../main.css";
import Resume from "../Files/Caleb_Gibson_Resume_Fall_2024.pdf";

export default function Navbar() {
  const navRef = useRef();

  return (
    <div className="Navbar">
      <header>
        <nav ref={navRef}>
          <a href="#About">About</a>
          <a href="#EPortfolio">E-Portfolio</a>
          <a href="#CourseWork">Course Work</a>
          <a href={Resume} download="Caleb_Gibson_Resume.pdf">
            Resume
          </a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}
