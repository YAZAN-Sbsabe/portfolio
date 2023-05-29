import React from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";
const Experience = () => {
  return (
    <section id="Experience" className="Experience">
      {/* <h5>What Skills I Have</h5> */}
      {/* <h2>My Experience</h2> */}
      <h2>What Skills I Have</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>H T M L</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Tailwind Css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <h3 style={{ marginTop: "20px",marginBottom:"15px" }}>Soft Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Communication Skills</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Decision Making</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>MicroSoft Offise</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>PhotoShop</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>BackEnd Development Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
