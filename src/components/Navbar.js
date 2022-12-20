import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "../main.css"
// import { ReactComponent as Logo } from '../images/Coffee.svg';
import Logo1 from '../images/Coffee.png'

export default function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    // <img className="Logo" src={logo} alt="coffee logo"></img>
    // <svg className="Logo" src={logo} alt ="coffee logo" ></svg>
//          <Logo className="Logo"></Logo>

  return (
      <header>
          <nav ref={navRef}>
            <img src={Logo1} className = "Logo1" alt="Coffee"/>
            <a href="#About">About</a>
            <a href="#EPortfolio">E-Portfolio</a>
            <a href= "#CourseWork">Course Work</a>
            <a href="#Resume">Resume</a>
            <a href="#Contact">Contact</a>
              <button className ="nav-btn nav-close-btn" onClick={showNavBar}>
                  <FaTimes />
            </button>
          </nav>
          <button className = "nav-btn" onClick={showNavBar}>
              <FaBars />
          </button>
      </header>
  )
}
