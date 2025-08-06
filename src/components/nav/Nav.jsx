import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";
Link;
const Nav = ({ isMenuOpen }) => {
  const items = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "clients",
    "contact",
  ];
  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
      <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        {items.map((item, index) => (
          <Link to={item} key={index} className="nav-link">
            {item}
          </Link>
        ))}

        {/*   <ul className="nav-menu">
            <li className="nav-item">
                <a href="#home" className="nav-link active">
                    home
                </a>
            </li>
            <li className="nav-item">
                <a href="#about" className="nav-link">
                    About
                </a>
            </li>
            <li className="nav-item">
                <a href="#skills" className="nav-link">
                    Skills
                </a>
            </li>
            <li className="nav-item">
                <a href="#services" className="nav-link">
                    Services
                </a>               
            </li>
           <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                    Portfolio
                </a>               
            </li> 
            <li className="nav-item">
                <a href="#contact" className="nav-link">
                    Contact
                </a>               
            </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Nav;
