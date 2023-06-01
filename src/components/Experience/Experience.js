import React, { useEffect } from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const controls = useAnimation();
  const control = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
      control.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -40,
      });
      control.start({
        opacity: 0,
        y: 40,
      });
    }
  }, [controls, control, inView]);
  return (
    <Element name="Experience">
      <section
        className="Experience"
        style={{ marginTop: "2rem", paddingTop: "0rem" }}
      >
        {/* <h5>What Skills I Have</h5> */}
        {/* <h2>My Experience</h2> */}
        <h2>What Skills I Have</h2>
        <div className="container experience_container">
          <motion.div
            ref={ref}
            animate={controls}
            // initial={{ opacity: 0, y: 0 }}
            // style={{ opacity: 0, y: 0 }}
            className="experience_frontend"
          >
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
                  <h4>React Js</h4>
                  <small className="text-light">Intermediate</small>
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
            </div>
            {/* <h3 style={{ marginTop: "20px", marginBottom: "15px" }}>Soft Skills</h3> */}
          </motion.div>
          <motion.div
            ref={ref}
            animate={control}
            // initial={{ opacity: 0, y: 0 }}
            // style={{ opacity: 0, y: 0 }}
            className="experience_backend"
          >
            <h3>Soft Skills</h3>
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
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
