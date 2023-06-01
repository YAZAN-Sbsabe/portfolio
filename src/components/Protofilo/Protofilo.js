import React, { useEffect, useState } from "react";
import "./Protofilo.css";
import image1 from "../image/Instagram Story – 1.png";
import image2 from "../image/Instagram Story.png";
import image3 from "../image/Mouk up.png";
import image4 from "../image/Mouk up@2x.png";
import image5 from "../image/MoukUp.png";
import image6 from "../image/test1@2x.png";
import image7 from "../image/test2@2x.png";
import image8 from "../image/Web 1920 – 1@2x.png";
import image9 from "../image/test3@2x.png";
import image10 from "../../image/IMG_95070.jpg";
import image11 from "../../image/IMG_88210.jpg";
import image12 from "../../image/photo_2023-06-01_11-43-30.jpg";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Protofilo = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      animation.start({ opacity: 0, y: -150 });
    }
  }, [animation, inView]);
  const [activebtn, setactivebtn] = useState(true);
  return (
    <Element name="Protofilo">
      <motion.section
        ref={ref}
        animate={animation}
        // initial={{ opacity: 0, y: -100 }}
        // style={{ opacity: 0, y: -100 }}
        className="Protofilo"
      >
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
        <div className="between-btn">
          <button
            onClick={() => setactivebtn(true)}
            className={activebtn ? "active" : ""}
          >
            Ui/Ux Projects
          </button>
          <button
            onClick={() => setactivebtn(false)}
            className={!activebtn ? "active" : ""}
          >
            WebSite Projects
          </button>
        </div>
        {activebtn && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="container protofilo_container"
          >
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image1} target="_blank">
                  <img src={image1} alt="" />
                </a>
              </div>
              <h3>Food order web application</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image2} target="_blank">
                  <img src={image2} alt="" />
                </a>
              </div>
              <h3>Instagram application</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image5} target="_blank">
                  <img src={image5} alt="" />
                </a>
              </div>
              <h3>WhatsApp application</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image6} target="_blank">
                  <img src={image6} alt="" />
                </a>
              </div>
              <h3>SoftWare WebSite</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image4} target="_blank">
                  <img src={image4} alt="" />
                </a>
              </div>
              <h3>Login creation page</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image7} target="_blank">
                  <img src={image7} alt="" />
                </a>
              </div>
              <h3>SoftWare WebSite</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image8} target="_blank">
                  <img src={image8} alt="" />
                </a>
              </div>
              <h3>delusive app</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image3} target="_blank">
                  <img src={image3} alt="" />
                </a>
              </div>
              <h3>Food order application</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image9} target="_blank">
                  <img src={image9} alt="" />
                </a>
              </div>
              <h3>SoftWare WebSite</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to see the full photo
              </p>
            </article>
          </motion.div>
        )}
        {!activebtn && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="container protofilo_container"
          >
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a
                  href="https://yazan-sbsabe.github.io/MyGallery/"
                  target="_blank"
                >
                  <img src={image11} alt="" />
                </a>
              </div>
              <h3>My WebSite1</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="http://recruitment.alyousser.com/" target="_blank">
                  <img src={image12} alt="" />
                </a>
              </div>
              <h3>HR WebSite</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="https://yazan-sabsabee.github.io/CV/" target="_blank">
                  <img src={image10} alt="" />
                </a>
              </div>
              <h3>My WebSite2</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>
          </motion.div>
        )}
      </motion.section>
    </Element>
  );
};

export default Protofilo;
