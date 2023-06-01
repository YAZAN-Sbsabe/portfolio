import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Element, Link } from "react-scroll";
const Footer = () => {
  return (
    <Element name="">
      <footer className="Footer">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
          className="footer_logo"
        >
          YA Z AN
        </Link>
        <ul className="permalinks">
          <li>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="Experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer_socials">
          <a href="https://www.facebook.com/YAZAN.Graphy/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/yazan_sabsabe_/" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; YA Z AN Tutorials. All rights reserved.</small>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
