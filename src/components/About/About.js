import React, { useEffect } from "react";
import "./About.css";
import me from "../../image/- (58) copy.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { HiFolderOpen } from "react-icons/hi";
import { Element, Link } from "react-scroll";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
      animation2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      })
    } else {
      animation.start({ opacity: 0, y: -50 });
      animation2.start({ opacity: 0, y: 50 });
    }
  }, [animation, animation2, inView]);
  return (
    <Element name="About">
      <section
        className="About">
        {/* <h5>Get To Know</h5> */}
        <h2>About Me</h2>
        <div className="container about_container">
          <motion.div
            ref={ref} animate={animation}
            // initial={{ opacity: 0, y: -100 }}
            // style={{ opacity: 0, y: -100 }}
            className="about_me">
            <div className="about_me-image">
              <img src={me} alt="yazan" />
            </div>
          </motion.div>
          <motion.div
            ref={ref} animate={animation2}
            // initial={{ opacity: 0, y: -100 }}
            // style={{ opacity: 0, y: -100 }}
            className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
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
              I am an initiative and enthusiastic person to achieve success in my field. I have analytical skills and creative thinking that help me reach effective solutions. I can work well individually as well as within a team, and I am sure that I will be a valuable addition to the work team.
            </p>
            {/* <p>My Hobby is
            Photography and I aspire to be the best in everything.</p> */}
            <Link to="Contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default About;
