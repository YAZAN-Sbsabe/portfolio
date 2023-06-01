import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "./Skills.css";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAward } from "react-icons/fa";

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "1",
      title: "Front End React Developer",
      content:
        "Dealing with the Design Material UI library, experience in creating components and organizing the project",
    },
    {
      id: "2",
      title: "UI/UX",
      content:
        "Experienced in building interactive and reusable user interfaces using Ui/Ux , I love working in UI/UX because it allows me to create designs that are both beautiful and functional",
    },
    {
      id: "3",
      title: "Front End React Developer",
      content:
        "I enjoy working with Redux because it helps me manage the state of complex applications in a scalable and efficient way , I am passionate about staying up-to-date with the latest Redux techniques and best practices to ensure that my code is efficient and effective",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Element name="skills">
      <section className="skills">
        <h2>Experience</h2>
        <div className="container skills_container">
          <div className="skills_cards">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`skills_card ${index === currentSlide ? "" : "out"}`}
              >
                <div className="hreader-skills_card">
                  <FaAward className="about_icon" />
                  <label>
                    10 - 2021 Al-Yousser for Engineering Advancement
                  </label>
                </div>
                <p>{slides[currentSlide].title}</p>
                <small>{slides[currentSlide].content}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="btn-next">
          <button onClick={nextSlide}>
            <BiCaretLeft />
          </button>
          <label>Move</label>
          <button onClick={prevSlide}>
            <BiCaretRight />
          </button>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
