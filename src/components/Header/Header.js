import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
import me from "../../image/-__58__copy-removebg-preview.png";
import { CSSTransition } from 'react-transition-group';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, My Name is</h5>
        <div>
          <h1>YAZAN SabSabi</h1>
        </div>
        <h5 className="text-light">And I'm A Front End React Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="yazan" />
        </div>
        <a href="#Contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
