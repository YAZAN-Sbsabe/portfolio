import React from "react";
import "./About.css";
import me from "../../image/- (58) copy.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { HiFolderOpen } from "react-icons/hi";
const About = () => {
  return (
    <section id="About" className="About">
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="yazan" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <HiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about_card">
              <HiFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Graduated from the Institute Of Computer Technology, looking for a
            job where I can improve and develop as a person.
            <span style={{ color: "rgba(77, 181, 255)", fontSize: "18px" }}> My Skills & Expriences</span> ,
            I learned html at the Computer Technical Institute, then worked more on English in order to build a website, then learned Css in order to make the site aesthetic, I also learned Java Script in order to add touches and movements to the site.
            I am working on developing myself in the field of programming and web design more and more by gaining practical experience and knowing how to solve problems transparently.Dealing with the design material UI library.experience in creating
            components and organizing the Project .Experience in building interactive and reusable user interfaces using UI/UX .Dealing with Redux .
          </p>
          {/* <p>My Hobby is
            Photography and I aspire to be the best in everything.</p> */}
          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
