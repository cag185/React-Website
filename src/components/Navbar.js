import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../main.css";
import Logo1 from "../images/Coffee.png";
import Resume from "../Files/Caleb_Gibson_Resume_Spring_2023.pdf";

export default function Navbar() {
  const navRef = useRef();

  return (
    <header>
      <img src={Logo1} className="Logo1" alt="Coffee" />
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
  );
}
